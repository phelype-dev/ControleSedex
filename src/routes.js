const express = require('express');
const routes = express.Router();
const ControllerIndex = require('./controllers/IndexController');
const homeController = require('./controllers/HomeController/homeControllers');
const redirectController = require('./controllers/Redirects/redirectController');
const cidadeController = require('./controllers/cidadeController');

routes.get('/', ControllerIndex.index);
routes.get('/home', homeController.index);
routes.get('/cadastros/destinatarios', redirectController.formDestinatarios);
routes.get('/buscarcidades', cidadeController.listaCidade);

module.exports = routes;