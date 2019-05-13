let mongoose = require('mongoose');

module.exports = function () {
    let schema = mongoose.Schema({
        nome: { type: String, required: true },
        tipo: { type: String, required: true },
        dataDoResgate: { type: Date, required: true },
        morto: { type: Boolean, required: true },
        itensUsados: { type: Array, required: true },
        estaVacinado: { type: Boolean, required: true },
        horaAlimentacao: { type: Number, required: true },
        statusComida: { type: Number, required: true },
        statusAgua: { type: Number, required: true },
        statusSaude: { type: Number, required: true },
        statusAtencao: { type: Number, required: true }
    });
    return mongoose.model('Animal', schema);
}();