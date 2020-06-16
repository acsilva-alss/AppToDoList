const user = require('../models/user');
const apiAxios = require('axios');
//const axios = apiAxios.create({
//    baseURL: 'https://api.github.com',
//});

module.exports = {
    async UserGitInsert(req, res){
        const userGit = req.params.userGit;
        await apiAxios.get('https://api.github.com/users/' +userGit)
        .then(function(response){
            return res.send(response);
        })
        .catch(function(err){
            return res.status(400).send({error: 'User not found in git '});
        } );        
    }
};