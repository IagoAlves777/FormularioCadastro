import React from 'react';
import { TextField, Button,} from '@material-ui/core';

function DadosUsuario(){
    return(
        <form>
            <TextField 
                id="email"
                label="Email" 
                type="email"
                variant="outlined"
                margin="normal"
                fullWidth
                />
            <TextField 
                id="senha"
                label="Senha"
                type="password"
                variant="outlined"
                margin="normal"
                fullWidth
                />
            <Button 
                variant="contained" 
                color="primary" 
                type="submit">Cadastrar</Button>
        </form>
    );
}

export default DadosUsuario;