let mongoose = require('mongoose');

module.exports = function () {
    let schema = mongoose.Schema({
        nome: { type: String, required: true, unique : true },
        tipo: { type: String, required: true }/*, 
        dataDoResgate: { type: Date, required: true },
        morto: { type: Boolean, required: true }, */
        /* itensUsados: { type: Array, required: true }, */
        /* dataVacina: { type: Number, required: true },
        estaVacinado: { type: Boolean, required: true },
        dataComida: { type: Number, required: true },
        statusComida: { type: Number, required: true },
        dataAgua: { type: Number, required: true },
        statusAgua: { type: Number, required: true },
        dataSaude: { type: Number, required: true },
        statusSaude: { type: Number, required: true },
        dataAtencao: { type: Number, required: true },
        statusAtencao: { type: Number, required: true } */
    }, {collection:'animais'});
    return mongoose.model('Animal', schema);
}();