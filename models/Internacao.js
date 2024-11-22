const mongoose = require('mongoose')

const Internacao = mongoose.model('Hospitalization', {
    entrada: String,
    hora: String,
    paciente: String,
    type: String,
    permanencia: Number,
    observacoes: String,
})

module.exports = Internacao