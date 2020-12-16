import React from 'react';
import {
  FormControl, Select, MenuItem, makeStyles,
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

import { PagingOptions } from 'interface';

interface Props {
  options: PagingOptions;
  onChange: (options: PagingOptions) => void;
}

export default function Paging({ options, onChange }: Props) {
  const classes = usePageStyles();

  const { total, size, page } = options;

  const pagesCount = Math.ceil(total / size);

  const handleSizeChange = (e: any) => {
    const { value } = e.target;
    onChange({
      ...options,
      size: parseInt(value, 10),
      page: 1,
    });
  };

  const handlePageChange = (event: object, page: number) => {
    onChange({
      ...options,
      page,
    });
  };

  return (
    <div className={classes.wrapper}>
      <span>페이지 당 개수</span>
      <FormControl className={classes.select}>
        <Select
          fullWidth
          name="size-select"
          value={String(size)}
          onChange={handleSizeChange}
        >
          <MenuItem value="10">10</MenuItem>
          <MenuItem value="20">20</MenuItem>
          <MenuItem value="40">40</MenuItem>
          <MenuItem value="60">60</MenuItem>
          <MenuItem value="100">100</MenuItem>
        </Select>
      </FormControl>
      <Pagination
        count={pagesCount}
        page={page}
        onChange={handlePageChange}
        showFirstButton
        showLastButton
      />
    </div>
  );
}

const usePageStyles = makeStyles({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '8px 12px',
    background: '#fff',

    '& > *:not(button)': {
      marginLeft: 8,
    },
    margin: 0,
    borderBottom: 'none',
  },
  select: {
    minWidth: '50px',
    textAlign: 'right',
  },
});
