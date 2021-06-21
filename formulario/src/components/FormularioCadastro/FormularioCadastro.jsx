import React, {useState, useEffect} from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import {Stepper, Typography,Step, StepLabel} from "@material-ui/core"

function FormularioCadastro({ enviar, validacoes }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, SetDados] = useState({});
  useEffect(() =>{
    if(etapaAtual === formularios.length-1){
      enviar(dadosColetados);
    }
    
  })

  const formularios = [
    <DadosUsuario enviar={coletarDados} validacoes={validacoes}/>,
    <DadosPessoais enviar={coletarDados} validacoes={validacoes} />,
    <DadosEntrega enviar={coletarDados} validacoes={validacoes} />,
    <Typography variant="h5">Obrigado pelo Cadastro!</Typography>
  ];

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  function coletarDados(dados){
    SetDados({...dadosColetados, ...dados});
    
    proximo();
  }
  return <>
  <Stepper>
    <Step><StepLabel>Loguin</StepLabel></Step>
    <Step><StepLabel>Dados Pessoais</StepLabel></Step>
    <Step><StepLabel>Entrega</StepLabel></Step>
    <Step><StepLabel>Finalização</StepLabel></Step>
  </Stepper>
  {formularios[etapaAtual]}
  </>;
}

export default FormularioCadastro;
