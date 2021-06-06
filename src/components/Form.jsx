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
} from '@material-ui/core';

export default function Form({
  inputClass,
  handleTitleChange,
  handleDetailsChange,
  handleCategoryChange,
  handleSubmit,
  useCategory,
}) {
  return (
    <>
      <Container>
        <form>
          <TextField
            onChange={(event) => handleTitleChange(event)}
            className={inputClass}
            label="Título"
            variant="outlined"
            fullWidth
          />
          <TextField
            onChange={(event) => handleDetailsChange(event)}
            className={inputClass}
            label="Detalhes"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
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
