let mongoose = require('mongoose');

module.exports = function () {
    let schema = mongoose.Schema({
        nome: { type: String, required: true },
        email: { type: String, required: true },
        senha: { type: String, required: true },
        animaisAdotados: { type: Array, required: true },//É ISSO AQUI MSM?
        amigos: { type: Array, required: true },
        nivel: { type: Number, required: true },
        pontuacao: { type: Number, required: true },
        medalhas: { type: Array, required: true },
        itens: { type: Array, required: true },
        statusAmbiente: { type: Number, required: true }/* ,
        objetivosConcluidos: { type: Array, required: true } */
    });
    return mongoose.model('Usuario', schema);
}();