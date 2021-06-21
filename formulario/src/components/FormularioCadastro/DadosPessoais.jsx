import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';
function DadosPessoais({ enviar, validacoes }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [error, setError] = useState({ cpf: { valido: true, texto: "" } });


  function validarCampos(event){
    const {name, value} = event.target;
    const novoEstado = {...error};
    novoEstado[name] = validacoes[name](value);;
    setError(novoEstado);
  }
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        enviar({ nome, sobrenome, cpf, promocoes, novidades })
        setNome("")
        setSobrenome("")
        setCpf("")
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        variant="outlined"
        id="nome" label="Nome"
        margin="normal"
        fullWidth />

      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        variant="outlined"
        id="sobrenome"
        margin="normal"
        label="Sobrenome" fullWidth />

      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={validarCampos}
        name="cpf"
        error={!error.cpf.valido}
        helperText={error.cpf.texto}
        variant="outlined"
        id="cpf"
        margin="normal"
        label="CPF" fullWidth />

      <FormControlLabel
        control={
          <Switch
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked)
            }}
            name="promocoes"
            color="primary" />
        }
        label="Promoções"
      />

      <FormControlLabel
        control={
          <Switch
            checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked)
            }}
            name="novidades"
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

export default DadosPessoais;
