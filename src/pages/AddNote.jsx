import React, { useState } from 'react';
import AppNavBar from '../components/AppNavBar';
import Form from '../components/Form';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  input: {
    marginBottom: 10,
    display: 'block',
  },
}));

export default function AddNote() {
  const [useTitle, setTitle] = useState('');
  const [useDetails, setDetails] = useState('');
  const [useCategory, setCategory] = useState('academico');
  const [useErrorTitle, setErrorTitle] = useState(false);
  const [useErrorDetails, setErrorDetails] = useState('');
  const classes = useStyles();

  const handleTitleChange = ({ target: { value } }) => {
    if (value.length < 15) setTitle(value);
  };

  const handleDetailsChange = ({ target: { value } }) => {
    if (value.length < 80) setDetails(value);
  };

  const handleCategoryChange = ({ target: { value } }) => {
    setCategory(value);
  };

  const handleSubmit = () => {
    setErrorTitle(false);
    setErrorDetails(false);

    const currentTodo = {
      title: useTitle,
      details: useDetails,
      category: useCategory,
    };

    console.log(localStorage.getItem('todos'));
    if (useTitle && useDetails) {
      if (localStorage.getItem('todos')) {
        const formerTodos = JSON.parse(localStorage.getItem('todos'));
        const updatedTodos = [...formerTodos, currentTodo];

        localStorage.setItem('todos', JSON.stringify(updatedTodos));
      } else {
        localStorage.setItem('todos', JSON.stringify([currentTodo]));
      }
    }

    if (!useTitle) setErrorTitle(true);
    if (!useDetails) setErrorDetails(true);
  };

  const formProps = {
    handleTitleChange,
    handleDetailsChange,
    handleCategoryChange,
    useCategory,
    useErrorTitle,
    useErrorDetails,
    useTitle,
    useDetails,
  };

  return (
    <>
      <AppNavBar pageTitle="ADICIONAR LEMBRETE" search={false} />
      <div className={classes.toolbar}></div>
      <div className={classes.toolbar}></div>
      <Form
        inputClass={classes.input}
        {...formProps}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
