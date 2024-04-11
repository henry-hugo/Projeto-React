const fs = require('fs');

exports.addUser = (name, password) =>{
    const dadosDoJson = fs.readFileSync('users.json','utf-8');
    const users = JSON.parse(dadosDoJson);
    const novoUsuario = {name: name, password: password};

    users.push(novoUsuario);

    fs.writeFileSync('users.json', JSON.stringify(users), 'utf-8');
}