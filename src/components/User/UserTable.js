import { useState } from "react";
import { userData } from "../../api/userApi";
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
import TableToolbar from "./TableToolbar";
import UserTableHead from "./UserTableHead";
import UserMore from "./UserMore";

// style
const TableStyle = styled(Table)(({ theme }) => ({
  // border: "1px solid",
  minWidth: 500,
  overflowX: "auto",

  // status style
  "& .statusText": {
    padding: "2px 4px",
    borderRadius: theme.spacing(0.75),
    color: theme.palette.common.white,
  },
  "& .activeText": {
    backgroundColor: theme.palette.green.darker,
  },
  "& .bannedText": {
    backgroundColor: theme.palette.error.light,
  },

  // selected tableRow desing
  "& .MuiTableRow-root.Mui-selected": {
    backgroundColor: theme.palette.green.lighter,
  },

  // checkbox style
  "& .MuiCheckbox-root": {
    color: theme.palette.text.disabled,
  },
  "& .Mui-checked": {
    color: theme.palette.success.main,
  },
  "& .MuiIconButton-colorPrimary:hover": {
    backgroundColor: theme.palette.green.lighter,
  },
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

  //console.log(selectedItems);

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
      const newSelected = userData.map((n) => n.name);
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
    else if (selectedItemsIndex === 0)
      newSelected = newSelected.concat(selectedItems.slice(1));
    else if (selectedItemsIndex === selectedItems.length - 1)
      newSelected = newSelected.concat(selectedItems.slice(0, -1));
    else if (selectedItemsIndex > 0)
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

  // find if there's any empty rows || fill it up later
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - userData.length) : 0;

  // active/ banned
  const StatusText = ({ text }) => {
    if (text === "Active") {
      return <span className="statusText activeText">{text}</span>;
    } else if (text === "Banned") {
      return <span className="statusText bannedText">{text}</span>;
    } else {
      return { text };
    }
  };

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
            rowCount={userData.length}
          />

          {/* Table Body */}
          <TableBody>
            {sortableArr(userData, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user, idx) => {
                const isItemSelected = selectedItems.indexOf(user.name) !== -1;
                const labelId = `enhanced-table-checkbox-${idx}`;

                return (
                  <TableRow
                    key={user.name + idx}
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
                        onChange={(e) => handleClick(e, user.name)}
                      />
                    </TableCell>

                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {user.name}
                    </TableCell>
                    <TableCell>{user.company}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>{user.verified}</TableCell>
                    <TableCell>
                      <StatusText text={user.status} />
                    </TableCell>
                    <TableCell align="right">
                      <UserMore />
                    </TableCell>
                  </TableRow>
                );
              })}

            {/* empty rows can be added below */}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </TableStyle>
      </TableContainer>

      {/* Table Pagination */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={userData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default UserTable;
