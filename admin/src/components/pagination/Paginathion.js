import React, { useContext, useEffect } from 'react';
import TablePagination from '@mui/material/TablePagination';

export default function TablePaginationDemo({ set, count }) {
    const { page, rowsPerPage, setPage, setRowsPerPage } = set;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        const newRowsPerPage = parseInt(event.target.value, 10);
        const newPage = Math.floor(page * rowsPerPage / newRowsPerPage); // Adjust page based on new rows per page
        setRowsPerPage(newRowsPerPage);
        setPage(newPage);
    };

    return (
        <TablePagination
            component="div"
            count={count}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 10, 15, 20]}
        />
    );
}
