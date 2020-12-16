import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';

export default function Main({
  isExtend,
  aside,
  header,
  content,
}: {
  isExtend?: boolean;
  header: any;
  content: any;
  aside?: any;
}) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.main, isExtend && classes.mainExtend)}>
      <div className={classes.section}>
        {header}
        {content}
      </div>
      <div>{aside}</div>
    </div>
  );
}
const useStyles = makeStyles({
  main: {
    display: 'flex',
    flex: 1,
  },
  mainExtend: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
    zIndex: 11,
    background: '#fff',
  },
  section: {
    flex: 1,
    overflowY: 'auto',
  },
});
