let mongoose = require('mongoose');

module.exports = function () {
    let schema = mongoose.Schema({
        email: { type: String, required: true, unique : true },
        username: { type: String, required: true, unique : true },
        password: { type: String, required: true },
        animaisAdotados: [{ type: mongoose.Schema.ObjectId, ref: 'Animal', required: true }],
        statusAmbiente: { type: Number, required: true },
        nivel: { type: Number, required: true },
        pontuacao: { type: Number, required: true },
        dinheiro: { type: Number, required: true }/* ,
        amigos: { type: Array, required: true },
        medalhas: { type: Array, required: true },
        objetivosConcluidos: { type: Array, required: true },
        itens: { type: Array, required: true } */
    }, {collection:'usuarios'});
    return mongoose.model('Usuario', schema);
}();