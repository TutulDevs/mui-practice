import { TableContainer, Table } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import { useState } from "react";
import { rows } from "../../api/userApi";
import TableToolbar from "./TableToolbar";
import UserTableHead from "./UserTableHead";

// style
const TableStyle = styled(Table)(({ theme }) => ({
  border: "1px solid",
  minWidth: 500,

  overflowX: "auto",
}));

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
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

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
        </TableStyle>
      </TableContainer>
    </>
  );
};

export default UserTable;
