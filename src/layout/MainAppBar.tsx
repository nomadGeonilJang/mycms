import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  makeStyles,
  Button,
} from '@material-ui/core';
import {
  Menu as MenuIcon,
} from '@material-ui/icons';

interface Props {
  setNav: any;
  barColor?: any;
  title: any;
}

export default function MainAppBar({ setNav, title, barColor = '#5f0080' }: Props) {
  const classes = useStyles();

  return (
    <AppBar
      position="sticky"
      className={classes.appBar}
      style={{ background: barColor }}
    >
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={setNav}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h1" className={classes.mainTitle}>
          {title}
        </Typography>
        <div className={classes.alignEnd}>
          <Button onClick={() => {}}>로그아웃</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

const useStyles = makeStyles({
  appBar: {
    height: 50,

    '& a': {
      color: '#fff',

      '&:hover': {
        textDecoration: 'none',
      },
    },
    '& .MuiButton-label': {
      color: '#fff',
    },
  },
  alignEnd: {
    display: 'inline-flex',
    alignItems: 'center',
    marginLeft: 'auto',

    '& > *': {
      marginLeft: '1.2em',
    },
  },
  mainTitle: {
    margin: '0 0.5em',
    fontWeight: 500,
  },
  btnGroup: {
    '& > *': {
      marginLeft: '0.5em',
    },
  },
  iconButton: {
    marginLeft: '0.8em',
    borderRadius: 0,
    background: '#fff !important',
  },
});
