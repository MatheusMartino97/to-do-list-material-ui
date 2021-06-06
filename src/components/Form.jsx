import React from 'react';
import {
  TextField,
  Container,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  Typography,
} from '@material-ui/core';

export default function Form({
  inputClass,
  handleTitleChange,
  handleDetailsChange,
  handleCategoryChange,
  handleSubmit,
  useCategory,
  useErrorTitle,
  useErrorDetails,
  useTitle,
  useDetails,
}) {
  return (
    <>
      <Container>
        <form>
          <Typography variant="h6" element="h1" color="primary">
            Lembrete
          </Typography>
          <TextField
            onChange={(event) => handleTitleChange(event)}
            className={inputClass}
            label="Título"
            variant="outlined"
            fullWidth
            required
            error={useErrorTitle}
            value={useTitle}
          />
          <TextField
            onChange={(event) => handleDetailsChange(event)}
            className={inputClass}
            label="Detalhes"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            required
            error={useErrorDetails}
            value={useDetails}
          />

          <FormControl className={inputClass}>
            <FormLabel>Categoria</FormLabel>
            <RadioGroup
              onChange={(event) => handleCategoryChange(event)}
              value={useCategory}
            >
              <FormControlLabel
                value="academico"
                control={<Radio />}
                label="Acadêmico"
              />
              <FormControlLabel
                value="tarefa"
                control={<Radio />}
                label="Tarefa"
              />
              <FormControlLabel
                value="lembrete"
                control={<Radio />}
                label="Lembrete"
              />
              <FormControlLabel
                value="trabalho"
                control={<Radio />}
                label="Trabalho"
              />
            </RadioGroup>
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={(event) => handleSubmit(event)}
          >
            Adicionar
          </Button>
        </form>
      </Container>
    </>
  );
}
