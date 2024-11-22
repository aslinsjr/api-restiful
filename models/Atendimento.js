const mongoose = require('mongoose')

const Atendimento = mongoose.model('Service', {
    dia: String,
    hora: String,
    paciente: String,
    type: String,
    servicos: Array,
})

module.exports = Atendimento