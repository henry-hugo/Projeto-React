const fs = require('fs');

const meuFilmes = fs.readFileSync('filme.json', 'utf-8');

exports.buscarFilmes = () => {
    return JSON.parse(meuFilmes);

}

exports.buscarTitulo = (titulo) => {
    const Filme = JSON.parse(meuFilmes);
    return Filme.filter(Filme => Filme.titulo.toLowerCase().includes(titulo.toLowerCase()));
}