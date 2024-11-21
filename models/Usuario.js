const mongoose = require('mongoose')

const Usuario = mongoose.model('User', {
  nome: String,
  nascimento: String,
  email: String,
  telefone: String,
  senha: String
})

module.exports = Usuario