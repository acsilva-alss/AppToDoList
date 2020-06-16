const express = require('express');
const bodyParser = require('body-parser');
const routes = express.Router();
const userController = require('./controllers/userController');
const userGitController = require('./controllers/userGitController');

routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({ extended: false }));

routes.get('/user/list', userController.UserQueryAll);
routes.post('/user/register', userController.UserInsert);
routes.put('/user/edit/:userId', userController.UserEdit);
routes.delete('/user/delete/:userId', userController.UserDelete);

routes.get('/user/git/:userGit', userGitController.UserGitInsert);

module.exports = routes;



