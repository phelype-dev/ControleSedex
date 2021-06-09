const sequelize = require('sequelize');

const connections = new sequelize(
    "controlesedex",
    "root",
    "123456789",
    {   
        //Banco de dados utilizado//
        dialect: "mysql",
        //Timezone da região// Desabilitado temporariamente//
        //timezone: "-3:00"
    }
);

//Exportando configuração//
module.exports = connections;