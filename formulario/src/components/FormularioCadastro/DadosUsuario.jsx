import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function DadosUsuario({ enviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        enviar({email, senha});
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="email"
        label="Email"
        required
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        id="senha"
        label="Senha"
        required
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuario;
