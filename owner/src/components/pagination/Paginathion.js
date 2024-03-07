import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationControlled({ set, count }) {
    const { page, rowsPerPage, setPage, setRowsPerPage } = set;
  const handleChange = (event, value) => {
    setPage(value);
  };

  let pages=Math.ceil(count/rowsPerPage);
  return (
    <div className='d-flex justify-content-center'>

    <Stack spacing={1}>
      <Pagination  color="primary"  size="large"  count={pages} page={page} onChange={handleChange} />
    </Stack>
    </div>
  );
}
