const fs = require('fs');

const meuLivros = fs.readFileSync('livro.json', 'utf-8');

exports.buscarLivros = () => {
    return JSON.parse(meuLivros);

}

exports.buscarTitulo = (titulo) => {
    const Livro = JSON.parse(meuLivros);
    return Livro.find(Livro => Livro.titulo.toLowerCase().includes(titulo.toLowerCase()));

}