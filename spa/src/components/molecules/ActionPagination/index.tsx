import React, { useState } from 'react';
import { Pagination, Stack } from '@mui/material';
import { Box } from '@material-ui/core';

interface Props {
  count: number;
  color: 'primary' | 'secondary';
  updateList: (arg: number) => void;
}

const ActionPagination: React.VFC<Props> = (props) => {
  const [page, setPage] = useState(1);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    props.updateList(value);
  };

  return (
    <Box>
      <Stack spacing={2}>
        <Pagination
          count={props.count}
          page={page}
          color={props.color}
          onChange={handlePageChange}
        />
      </Stack>
    </Box>
  );
};

export default ActionPagination;
