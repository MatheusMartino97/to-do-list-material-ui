import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import AppNavBar from '../components/AppNavBar';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  makeStyles,
  IconButton,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  primaryHeading: {
    textTransform: 'capitalize',
  },

  secondaryHeading: {
    textTransform: 'capitalize',
    color: '#999999',
    textAlign: 'end',
    flexGrow: 1,
  },

  accSumary: {
    flexGrow: 1,
  },

  details: {
    // flexGrow: 1,
    // overflow: 'scroll',
    // textOverflow: 'scroll',
    wordWrap: 'brack-word',
    width: '100%',
  },

  accordion: {
    // overflow: 'scroll',
    // textOverflow: 'scroll',
    wordWrap: 'brack-word',
  },
}));

export default function Notes() {
  const todosList = JSON.parse(localStorage.getItem('todos'));
  const [useFilteredItems, setFilteredItems] = useState(todosList);
  const classes = useStyles();

  const handleSearchChange = ({ target: { value } }) => {
    setFilteredItems(
      todosList.filter(({ title, details, category }) => {
        if (
          title.toUpperCase().includes(value.toUpperCase()) ||
          details.toUpperCase().includes(value.toUpperCase()) ||
          category.toUpperCase().includes(value.toUpperCase())
        ) {
          return true;
        }

        return false;
      })
    );
  };

  const handleDeleteButton = (title, details, category) => {
    console.log('title, details, category');
    const updatedTodos = todosList.reduce((acc, currentTask) => {
      if (
        currentTask.title === title &&
        currentTask.details === details &&
        currentTask.category === category
      ) {
        return acc;
      }

      return [...acc, currentTask];
    }, []);

    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setFilteredItems(updatedTodos);
  };

  return (
    <>
      <AppNavBar
        pageTitle="LISTA DE TAREFAS"
        search={true}
        handleSearchChange={handleSearchChange}
      />
      <div className={classes.toolbar}></div>
      <div className={classes.toolbar}></div>
      <Container>
        {useFilteredItems &&
          useFilteredItems.map(({ title, details, category }) => (
            <Accordion className={classes.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.primaryHeading}>
                  {title}
                </Typography>
                <Typography className={classes.secondaryHeading}>
                  {category}
                </Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.accDetails}>
                <Typography noWrap={false} className={classes.details}>
                  {details}
                </Typography>
                <IconButton
                  onClick={() => {
                    handleDeleteButton(title, details, category);
                  }}
                >
                  <DeleteIcon color="error" className={classes.deleteIcon} />
                </IconButton>
              </AccordionDetails>
            </Accordion>
          ))}
      </Container>
      {(JSON.parse(localStorage.getItem('todos')) &&
      !JSON.parse(localStorage.getItem('todos')).length) || !JSON.parse(localStorage.getItem('todos')) ? (
        <Redirect to="/add-note" />
      ) : null}
    </>
  );
}
