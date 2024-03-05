import React from 'react';
import TablePagination from '@mui/material/TablePagination';

export default function TablePaginationDemo({ set, count }) {
    const { page, rowsPerPage, setPage, setRowsPerPage } = set;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        const newRowsPerPage = parseInt(event.target.value, 10);
        setRowsPerPage(newRowsPerPage);

        // Calculate the new page number based on the new rows per page setting
        const newPage = Math.min(page, Math.ceil(count / newRowsPerPage) - 1);
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
