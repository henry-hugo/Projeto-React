
//chamando o pacote que eu instalei para dentro do meu arquivo para poder usa-lo
const express = require('express');
const LivrosImportados = require('./services/livroService');
const userService = require('./services/usersServices');
const body = require('body-parser');
const cors = require('cors');
//cria objeto app para receber todas funções do express
const app = express();
app.use(cors());
app.use(body.json());

app.get('/minhaRota', (req, res)=>{
    res.status(200).json(LivrosImportados.buscarLivros())
});

app.get('/buscarLivros/:titulo', (req, res)=>{

    const {titulo} = req.params;
    const resultado = LivrosImportados.buscarTitulo(titulo);

    if (resultado) {
       res.status(200).send(resultado)
    }else{
        res.status(404).send('recurso nãoencontrado');
    }
});


app.post('/addUser', (req, res) =>{
    const {name, password} = req.body;
    if(name && password){
        userService.addUser(name, password);
        res.status(200).send("User add")
    }else{
        res.status(400).send('Dados invalidos')
    }
})
app.listen(8080)



