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

import { openNavbar } from 'recoils';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});
const menus = [{ id: 'hello', title: '메인메뉴', links: [{ label: 'hello1', to: '/' }, { label: 'hello2', to: '/' }, { label: 'hello3', to: '/' }] }];
export default function SideBar() {
  const classes = useStyles();
  const [open, setOpen] = useRecoilState(openNavbar.openNavbarState);
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  const toggleDrawer = (
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
  };

  const list = () => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onKeyDown={toggleDrawer}
    >
      <List>
        {menus.map((item) => (
          <ListItem key={item.id} style={{ padding: 0 }}>
            <Accordion style={{ width: '100%' }} square expanded={expanded === item.title} onChange={handleChange(item.title)}>
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" style={{ height: '30px' }}>
                <Typography>{item.title}</Typography>
              </AccordionSummary>
              <List>
                {item.links.map((link, index) => (
                  <ListItem button key={link.label} onClick={toggleDrawer}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
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
  );
  return (
    <div>
      <React.Fragment key="left">
        <Drawer anchor="left" open={open} onClose={toggleDrawer}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
