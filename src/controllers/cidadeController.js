const cidadeModel = require('../models/cidadeModel');
module.exports = {

    listaCidade(req, res) {
        cidadeModel.findAll().then((cidade => {
            res.render('cadastros/destinatarios', {cidade: cidade});
        }))
    }
}