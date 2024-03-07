
//chamando o pacote que eu instalei para dentro do meu arquivo para poder usa-lo
const express = require('express');
const LivrosImportados = require('./services/livroService')
//cria objeto app para receber todas funções do express
const app = express();

app.get('/minhaRota', (req, res)=>{
    res.status(200).json(LivrosImportados.buscarLivros())
});

app.listen(8080)



