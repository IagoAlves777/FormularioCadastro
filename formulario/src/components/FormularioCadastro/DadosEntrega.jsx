import React from 'react';
import { TextField,Button } from "@material-ui/core"

function DadosEntrega({enviar}) {
    return (
        <form onSubmit={(event)=>{
            event.preventDefault();
            enviar();
        }}>
            <TextField
                id="cep"
                label="CEP"
                type="number"
                variant="outlined"
                margin="normal"

            />

            <TextField
                id="endereco"
                label="Endereço"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                id="numero"
                label="Número"
                type="number"
                variant="outlined"
                margin="normal"

            />

            <TextField
                id="estado"
                label="Estado"
                type="text"
                variant="outlined"
                margin="normal"

            />

            <TextField
                id="cidade"
                label="Cidade"
                type="text"
                variant="outlined"
                margin="normal"
            />

            <Button
                variant="contained"
                fullWidth
                color="primary"
                type="submit">
                Finalizar Cadastro
            </Button>
        </form>
    );
}

export default DadosEntrega;