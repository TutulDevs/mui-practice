import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
  TablePagination,
} from "@material-ui/core";
import { styled } from "@material-ui/styles";
import { useState } from "react";
import { rows } from "../../api/userApi";
import TableToolbar from "./TableToolbar";
import UserTableHead from "./UserTableHead";

// style
const TableStyle = styled(Table)(({ theme }) => ({
  // border: "1px solid",
  minWidth: 500,

  overflowX: "auto",
}));

////////////////////////////////////////////////
const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;
  return 0;
};

const getComparator = (order, orderBy) => {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};

const sortableArr = (arr, comparator) => {
  const stabilizedThis = arr.map((el, idx) => [el, idx]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });

  return stabilizedThis.map((el) => el[0]);
};

const UserTable = () => {
  // states
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("calories");
  const [selectedItems, setSelectedItems] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  //////     functions      ///////////////////////////////
  // you click on the row, it takes the name as property, check the prop & sort
  const handleRequestSort = (e, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  // click the ckbox on top & select all the rows
  const handleSelectAllClick = (e) => {
    if (e.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelectedItems(newSelected);
      return;
    }
    setSelectedItems([]);
  };

  // click each item to select
  const handleClick = (e, name) => {
    const selectedItemsIndex = selectedItems.indexOf(name);
    let newSelected = [];

    // if not in the arr, add
    if (selectedItemsIndex === -1)
      newSelected = newSelected.concat(selectedItems, name);
    if (selectedItemsIndex === 0)
      newSelected = newSelected.concat(selectedItems.slice(1));
    if (selectedItemsIndex === selectedItems.length - 1)
      newSelected = newSelected.concat(selectedItems.slice(0, -1));
    if (selectedItemsIndex > 0)
      newSelected = newSelected.concat(
        selectedItems.slice(0, selectedItemsIndex),
        selectedItems.slice(selectedItemsIndex + 1)
      );

    setSelectedItems(newSelected);
  };

  // set page
  const handleChangePage = (e, newPage) => setPage(newPage);

  // change row per page
  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(e.target.value, 10);
    setPage(0);
  };

  // check if it's selected
  const isSelected = (name) => selectedItems.indexOf(name) !== -1;

  // find if there's any empty rows
  //  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <>
      {/* Toolbar */}
      <TableToolbar numSelected={selectedItems.length} />

      {/* Table */}
      <TableContainer>
        <TableStyle>
          {/* Table Head */}
          <UserTableHead
            numSelected={selectedItems.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
          />

          {/* Table Body */}
          <TableBody>
            {sortableArr(rows, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, idx) => {
                const isItemSelected = isSelected(row.name);
                const labelId = `enhanced-table-checkbox-${idx}`;

                return (
                  <TableRow
                    key={row.name}
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    aria-checked={isItemSelected}
                    selected={isItemSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{ "aria-labelledby": labelId }}
                        onClick={(e) => handleClick(e, row.name)}
                      />
                    </TableCell>

                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                );
              })}

            {/* empty rows can be added below */}
          </TableBody>
        </TableStyle>
      </TableContainer>

      {/* Table Pagination */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default UserTable;
