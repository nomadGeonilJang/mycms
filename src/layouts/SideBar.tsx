import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { useRecoilState } from 'recoil';
import {
  Accordion, AccordionSummary, Typography,
} from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';

import { openNavbar } from 'recoils';
import { Color } from 'theme/Color';
import { Margin } from 'theme/Margin';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

type Menu = {
  id:string;
  title:string
  links:{label:string, to:string}[]
}
type SideBarProps = {
  menus:Menu[];
}

const getMainPath = (path:string) => {
  if (!path.match(/\/\w+/)) {
    return 'main';
  }
  return path.split('/')[1];
};
export default function SideBar({ menus }:SideBarProps) {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();

  const [open, setOpen] = useRecoilState(openNavbar.openNavbarState);
  const [expanded, setExpanded] = React.useState<string | false>(getMainPath(location.pathname) ?? menus[0].id);

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  const toggleDrawer = (link?:string) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown'
      && ((event as React.KeyboardEvent).key === 'Tab'
        || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setOpen((pre) => !pre);
    if (link) {
      history.push(link);
    }
  };

  return (
    <div>
      <React.Fragment key="left">
        <Drawer anchor="left" open={open} onClose={toggleDrawer()}>
          <div
            className={clsx(classes.list)}
            role="presentation"
            onKeyDown={toggleDrawer()}
          >
            <List>
              {menus.map((item) => (
                <ListItem key={item.id} style={{ padding: 0, marginBottom: Margin.Bottom }}>
                  <Accordion style={{ width: '100%' }} square expanded={expanded === item.id} onChange={handleChange(item.id)}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" style={{ backgroundColor: Color.Gray }}>
                      <Typography>{item.title}</Typography>
                    </AccordionSummary>
                    <List>
                      {item.links.map((link, index) => (
                        <ListItem button key={link.label} onClick={toggleDrawer(link.to)}>
                          <ListItemText primary={link.label} />
                        </ListItem>
                      ))}
                    </List>
                  </Accordion>
                </ListItem>
              ))}
            </List>
            {/* <Divider /> */}
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
