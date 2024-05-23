
//chamando o pacote que eu instalei para dentro do meu arquivo para poder usa-lo
const express = require('express');
const FilmesImportados = require('./services/filmeService');
const userService = require('./services/usersServices');
const body = require('body-parser');
const cors = require('cors');
//cria objeto app para receber todas funções do express
const app = express();
app.use(cors());
app.use(body.json());

app.get('/minhaRota', (req, res)=>{
    res.status(200).json(FilmesImportados.buscarFilmes())
});

app.get('/buscarFilmes/:titulo', (req, res)=>{

    const {titulo} = req.params;
    const resultado = FilmesImportados.buscarTitulo(titulo);

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
//rota de login
app.post('/login', async (req, res)=>{
    //Extração das variáveis que estão sendo passadas
    const {name, password} = req.body;

    //aguardamos o resultado da função que irá validar nossos dados
    const resul = await userService.validateLogin(name, password);

    if(resul){
        res.status(200).json('ok')
    } else {
        res.status(401).json('Dados incorretos')
    }

})
app.listen(8080)



