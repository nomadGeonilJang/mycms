import React from 'react';
import { makeStyles } from '@material-ui/core';

import MainAppBar from './MainAppBar';

function Layout({ children }: any) {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <MainAppBar title="My CMS" />
      <div className={classes.wrap}>
        {children}
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  app: {
    minWidth: 1440,
    height: '100vh',
    background: '#fff',
  },
  wrap: {
    display: 'flex',
    height: 'calc(100% - 50px)',
  },
});

export default Layout;
