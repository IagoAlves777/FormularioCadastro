import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import './App.css';
import{Container} from "@material-ui/core"

class App extends Component {
  render(){
    return (
      <Container component="article" maxWidth="sm">
        <h1>Formulario Cadastro</h1>
        <FormularioCadastro/>
        </Container>
    );
  }
}

export default App;
