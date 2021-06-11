const express = require("express");
const server = express();
const connection = require("./database/conn");
const routes = require('./routes');
const path = require("path");

const cidade = require('./models/cidadeModel');
console.log(cidade);

//Motor de render para html
server.set('view engine', 'ejs');

//localização da pasta views
server.set('views', path.join(__dirname, "views"))

//export pasta public para styles
server.use(express.static("public"));
server.use(express.json());

//Excuta a conexão com Bando de Dados//
connection
  .authenticate()
  .then(() => console.log("Conectado ao banco"))
  .catch((err) => console.log(err));

  server.use(routes);

  server.listen(3000, () => {
  console.log("Express listening on 3000");
  });