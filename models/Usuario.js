const mongoose = require('mongoose')

const Usuario = mongoose.model('Element', {
  nome: String,
  sobrenome: String,
  idade: Number,
  cpf: String,
  saldo: Number,
  tranzacoes: Object
})

module.exports = Usuario