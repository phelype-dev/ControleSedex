const connection = require('../database/conn');
const sequelize = require('sequelize');

const Cidade = connection.define('Cidade', {

    municipio:{
        type: sequelize.STRING,
        allowNull: false
    },
    estado:{
        type: sequelize.BIGINT,
        allowNull: true
    }
});

//Cidade.sync({force: true})

module.exports = Cidade;