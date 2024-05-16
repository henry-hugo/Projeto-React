//chamando o pacote que eu instalei para dentro do meu arquivo para poder usa-lo
const express = require('express');
//cria objeto app para receber todas funções do express
const app = express();

app.get('/minhaRota', (req, res)=>{
    res.status(200).json("Seja bem vindo ola")
});

app.listen(8080)