const fs = require('fs');

exports.addUser = (name, password) =>{
    const dadosDoJson = fs.readFileSync('users.json','utf-8');
    const users = JSON.parse(dadosDoJson);
    const novoUsuario = {name: name, password: password};

    users.push(novoUsuario);

    fs.writeFileSync('users.json', JSON.stringify(users), 'utf-8');
}
exports.validateLogin = (name, password) => {
    //criamos uma constante que recebe os dados do json
    const userData = JSON.parse(fs.readFileSync('users.json', 'utf-8'));

    //constante que recebe o primeiro valor encontrado com base na regra
    const user = userData.find(user => user.name === name );

    //valida o usuário e a senha, sendo que caso o user não existir ou a senha
    //estiver incorreta, retornamos false
    if(!user || user.password !== password){
        return false;
    }
    return true;
}