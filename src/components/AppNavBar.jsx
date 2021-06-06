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
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import EventIcon from '@material-ui/icons/Event';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    color: 'white',
  },

  itemIcon: {
    marginLeft: 10,
  },

  drawer: {
    width: 240,
  },

  title: {
    flexGrow: 1,
    marginLeft: 24,
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },

  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function AppNavBar({ pageTitle, search, handleSearchChange }) {
  const [useDrawerState, setDrawerState] = useState(false);
  const history = useHistory();
  const classes = useStyles();

  const handleItemClick = (path) => {
    history.push(path);
    setDrawerState(false);

    if (
      JSON.parse(localStorage.getItem('todos')) &&
      !JSON.parse(localStorage.getItem('todos')).length
    )
      alert('Você ainda não possui lembretes.');
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
          className={classes.drawer}
        >
          {list()}
        </Drawer>
        <Typography className={classes.title} variant="h6" component="h1">
          {pageTitle}
        </Typography>
        {search && (
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(event) => handleSearchChange(event)}
            />
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
