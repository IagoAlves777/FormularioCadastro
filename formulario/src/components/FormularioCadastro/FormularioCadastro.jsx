import React, { useState } from 'react';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega';
import { Typography } from '@material-ui/core'
function FormularioCadastro({enviar, validarCPF }) {

  const [etapaAtual, setEtapaAtual] = useState(0);
  
  function proximo(){
    setEtapaAtual(etapaAtual + 1);
  }

  function formularioAtual(etapa) {
    switch (etapa) {
      case 0:
        return <DadosUsuario enviar={proximo()}/>
      case 1:
        return <DadosPessoais enviar={proximo()} validarCPF={validarCPF} />
      case 2:
        return <DadosEntrega />
      default:
        return <Typography>ERROR ao selecionar formulario</Typography>
    }
  }

  return (
    <>
      <DadosUsuario enviar={proximo()}/>
      {formularioAtual(0)}
    </>
  );
}

export default FormularioCadastro;