const mongoose = require('mongoose')

const Produto = mongoose.model('Product', {
    item: String,
    quantidade: Number,
    valor: String,
    fornecedor: String,
    validade: String,
    localizacaoNoEstoque: String,
    dataDeCompra: String,
    especie: String,
    tamanho: String,
    marca: String,
    imagem: String
})

module.exports = Produto