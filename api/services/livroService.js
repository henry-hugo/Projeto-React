const fs = require('fs');

const meuLivros = fs.readFileSync('livro.json', 'utf-8');

exports.buscarLivros = () => {
    return JSON.parse(meuLivros);

}