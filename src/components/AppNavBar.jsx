import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  // Typography,
  IconButton,
  // Container,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import EventIcon from '@material-ui/icons/Event';

const useStyles = makeStyles(() => ({
  menuButton: {
    color: 'white',
  },

  itemIcon: {
    marginLeft: 10,
  },
}));

export default function AppNavBar() {
  const [useDrawerState, setDrawerState] = useState(false);
  const history = useHistory();
  const classes = useStyles();

  const handleItemClick = (path) => {
    history.push(path);
    setDrawerState(false);
  };

  const itemsList = [
    {
      text: 'Adicionar lembrete',
      icon: <AddCircleOutlineIcon />,
      path: '/add-note',
    },

    {
      text: 'Lembretes',
      icon: <EventIcon />,
      path: '/',
    },
  ];
  const list = () => (
    <List>
      {itemsList.map(({ text, icon, path }) => (
        <ListItem button key={path} onClick={() => handleItemClick(path)}>
          <ListItemText primary={text} />
          <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
        </ListItem>
      ))}
    </List>
  );

  return (
      <AppBar>
        <Toolbar>
          <IconButton onClick={() => setDrawerState(true)}>
            <MenuIcon className={classes.menuButton} />
          </IconButton>
          <Drawer
            open={useDrawerState}
            anchor="left"
            onClose={() => setDrawerState(false)}
          >
            {list()}
          </Drawer>
        </Toolbar>
      </AppBar>
  );
}
