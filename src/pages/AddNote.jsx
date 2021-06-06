import React, { useState } from 'react';
import AppNavBar from '../components/AppNavBar';
import Form from '../components/Form';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  input: {
    marginBottom: 10
  }
}))

export default function AddNote() {
  const [useTitle, setTitle] = useState('');
  const [useDetails, setDetails] = useState('');
  const [useCategory, setCategory] = useState('academico');
  const classes = useStyles();

  const handleTitleChange = ({ target: { value } }) => {
    setTitle(value)
  }

  const handleDetailsChange = ({ target: { value } }) => {
    setDetails(value)
  }

  const handleCategoryChange = ({ target: { value } }) => {
    setCategory(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(useTitle, useDetails, useCategory)
  }

  const formProps = {
    handleTitleChange,
    handleDetailsChange,
    handleCategoryChange,
    useCategory
  }

  return (
    <>
      <AppNavBar />
      <div className={ classes.toolbar }></div>
      <div className={ classes.toolbar }></div>
      <Form inputClass={classes.input} {...formProps} handleSubmit={handleSubmit} />
    </>
  );
}
