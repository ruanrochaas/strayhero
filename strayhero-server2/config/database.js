let mongoose = require('mongoose');

module.exports = function (url) {
    mongoose.connect(url);
    mongoose.connection.on('connected', function () {
        console.log('Mongoose! Conectado em ' + url);
    });
    mongoose.connection.on('disconnected',
        function () {
            console.log('Mongoose! Desconectado de ' + url);
        });
    mongoose.connection.on('error', function (erro) {
        console.log('Mongoose! Erro na conexão: ' + erro);
    });
    mongoose.set('debug', true);
}