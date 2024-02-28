import React, { useContext, useEffect } from 'react';
import TablePagination from '@mui/material/TablePagination';

export default function TablePaginationDemo({ set,count }) {
    const { page, rowsPerPage, setPage, setRowsPerPage  } = set;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0); // Reset page number to 0 when rows per page changes
    };

    return (
        <TablePagination
        component="div"
        count={count}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 15, 20]} // Define the row selection options here
    />
    );
}
