import React from "react";
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';
function FormularioCadastro() {
  return (
    <form>
      <TextField
        variant="outlined"
        id="nome" label="Nome"
        margin="normal"
        fullWidth />

      <TextField
        variant="outlined"
        id="sobrenome"
        margin="normal"
        label="Sobrenome" fullWidth />

      <TextField
        variant="outlined"
        id="cpf"
        margin="normal"
        label="CPF" fullWidth />

      <FormControlLabel
        control={
          <Switch
            name="promocoes"
            defaultChecked
            color="primary" />
        }
        label="Promoções"
      />

      <FormControlLabel
        control={
          <Switch
            name="novidades"
            defaultChecked
            color="primary" />
        }
        label="Novidades"
      />
      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
