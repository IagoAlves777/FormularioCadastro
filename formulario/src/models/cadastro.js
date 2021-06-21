function validarCPF(cpf){
  if(cpf.length !==11){
    return {valido:false, texto: "CPF inválido"}
  }else{
    return {valido: true, texto: ""}
  }
}

function validarSenha(senha){
  if(senha.length < 4 || senha.length > 72){
    return {valido:false, texto: "Senha inválida"}
  }else{
    return {valido: true, texto: ""}
  }
}


export {validarCPF, validarSenha}