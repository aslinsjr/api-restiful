const mongoose = require('mongoose')

const Paciente = mongoose.model('Pet', {
    nome: String,
    especie: String,
    type: String,
    raca: String,
    idade: Number,
    atendimento: Array
})

module.exports = Paciente