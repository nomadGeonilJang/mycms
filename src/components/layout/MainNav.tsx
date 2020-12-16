import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

export default function MainNav({ categories }: any) {
  const classes = useStyles();

  const [openState, setOpenState]: [any, any] = useState({
    coupon: false,
    stock: false,
    promotion: false,
  });

  const handleClick = (subject: any) => {
    setOpenState({
      coupon: false,
      stock: false,
      promotion: false,
      [subject]: !openState[subject],
    });
  };

  return (
    <List id="nav" component="nav" className={classes.nav}>
      {categories.map(({ name, open, subCategory }: any) => (
        <React.Fragment key={name}>
          <ListItem button onClick={() => handleClick(open)}>
            <ListItemText>
              <strong>{name}</strong>
            </ListItemText>
            {openState[open] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openState[open]} unmountOnExit>
            {subCategory.map((menu: any, index: number) => (
              <List
                key={index}
                component="div"
                disablePadding
                className={classes.list}
              >
                {menu.map(({ name, to }: any) => (
                  <ListItem key={name} button className={classes.nested}>
                    <NavLink to={to} activeClassName={classes.active}>
                      {name}
                    </NavLink>
                  </ListItem>
                ))}
              </List>
            ))}
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );
}

const useStyles = makeStyles({
  nav: {
    overflowY: 'auto',
    width: 180,
    borderRight: '1px solid #eee',
    background: '#f7f7f7',
    transition: 'margin 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    willChange: 'margin',
  },
  listTitle: {
    padding: '0.5em 1em 0.5em 3.2em',
    fontWeight: 600,
  },
  nested: {
    padding: 0,
    fontWeight: 500,
    color: '#333',

    '& a': {
      flex: 1,
      padding: '0.5em 1em 0.5em 2.1em',
      color: '#333',
      textDecoration: 'none !important',
      wordBreak: 'keep-all',
    },
  },
  active: {
    fontWeight: 'bold',
    background: 'rgba(0, 0, 0, 0.12)',
  },
  ico: {
    marginRight: '0.5em',
  },
  list: {
    background: 'rgba(0, 0, 0, 0.04)',
    marginBottom: 4,
  },
  title: {
    fontWeight: 600,
  },
});
