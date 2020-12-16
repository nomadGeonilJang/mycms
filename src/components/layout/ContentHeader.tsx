import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

function ContentHeader({
  title,
  subTitle,
  children,
}: {
  children?: any;
  title: any;
  subTitle?: any;
}) {
  const classes = useStyles();
  return (
    <div className={classes.contentHeader}>
      <Typography variant="h2">{title}</Typography>
      {subTitle && <strong className={classes.subTitle}>{subTitle}</strong>}
      {children && <div className={classes.alignEnd}>{children}</div>}
    </div>
  );
}

const useStyles = makeStyles({
  contentHeader: {
    position: 'sticky',
    top: 0,
    left: 0,
    zIndex: 9,
    display: 'flex',
    alignItems: 'center',
    height: 40,
    padding: '0.5em 1.6em 0.5em 0.8em',
    borderBottom: '1px solid #cfd3d7',
    background: '#fff',
  },

  alignStart: {
    display: 'inline-flex',
    flex: '1 1 auto',
    justifyContent: 'flex-start',
    order: 1,
    zIndex: 1,
  },
  alignCenter: {
    display: 'inline-flex',
    flex: '1 1 auto',
    justifyContent: 'center',
    order: 1,
    zIndex: 1,
  },
  alignEnd: {
    display: 'inline-flex',
    flex: '1 1 auto',
    justifyContent: 'flex-end',
    order: 1,
    zIndex: 1,

    '& > *': {
      marginLeft: '0.7em',
    },
  },
  subTitle: {
    fontSize: '1.2rem',
    color: '#888',
    lineHeight: 'normal',

    '&::before': {
      display: 'inline-block',
      width: 1,
      height: 15,
      margin: '0 0.7em',
      backgroundColor: '#ccc',
      verticalAlign: 'middle',
      content: '""',
    },
  },
});

export default ContentHeader;
