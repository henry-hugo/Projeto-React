const fs = require('fs');

const meuLivros = fs.readFileSync('livro.json', 'utf-8');

exports.buscarLivros = () => {
    return JSON.parse(meuLivros);

}

exports.buscarTitulo = (titulo) => {
    const Livros = JSON.parse(meuLivros);
    return Livros.find(Livro => livro.titulo.toLowerCase().includes(titulo.toLowerCase()));


}