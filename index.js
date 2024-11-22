const express = require('express')
const app = express()
const mongoose = require('mongoose')

const Usuario = require('./models/Usuario')
const Paciente = require('./models/Paciente')
const Produto = require('./models/Produto')
const Atendimento = require('./models/Atendimento')
const Internacao = require('./models/Internacao')

mongoose
  .connect(
    'mongodb+srv://aslinsjr:23061990@api-restuful.xsihtkv.mongodb.net/',
  )
  .then(() => {
    console.log('Conectou ao banco!')
    app.listen(3000)
  })
  .catch((err) => console.log(err))

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.json({ message: "API Rest Mascot's" });
});

// Rotas Usuário
app.post('/usuario', async (req, res) => {
  const { nome, nascimento, email, telefone, senha, admin } = req.body

  const usuario = {
    nome,
    nascimento,
    email,
    telefone,
    senha,
    admin
  }

  try {
    await Usuario.create(usuario)

    res.status(201).json({ message: 'Elemento inserido no sistema com sucesso!' })

  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await Usuario.find()

    res.status(200).json(usuarios)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.patch('/usuario/:id', async (req, res) => {
  const id = req.params.id

  const { nome, nascimento, email, telefone, senha } = req.body

  const usuario = {
    nome,
    nascimento,
    email,
    telefone,
    senha
  }

  try {
    const updatedUser = await Usuario.updateOne({ _id: id }, usuario)

    if (updatedUser.matchedCount === 0) {
      res.status(422).json({ message: 'Usuário não encontrado!' })
      return
    }

    res.status(200).json(usuario)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.delete('/usuario/:id', async (req, res) => {
  const id = req.params.id

  const usuario = await Usuario.findOne({ _id: id })

  if (!usuario) {
    res.status(422).json({ message: 'Usuário não encontrado!' })
    return
  }

  try {
    await Usuario.deleteOne({ _id: id })

    res.status(200).json({ message: 'Usuário removido com sucesso!' })
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

// Rotas Paciente
app.post('/paciente', async (req, res) => {
  const { nome, especie, type, raca, idade, atendimento } = req.body

  const paciente = {
    nome,
    especie,
    type,
    raca,
    idade,
    atendimento
  }

  try {
    await Paciente.create(paciente)

    res.status(201).json({ message: 'Elemento inserido no sistema com sucesso!' })

  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.get('/pacientes', async (req, res) => {
  try {
    const pacientes = await Paciente.find()

    res.status(200).json(pacientes)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.patch('/paciente/:id', async (req, res) => {
  const id = req.params.id

  const { nome, especie, type, raca, idade, atendimento } = req.body

  const paciente = {
    nome,
    especie,
    type,
    raca,
    idade,
    atendimento
  }

  try {
    const updatedUser = await Paciente.updateOne({ _id: id }, paciente)

    if (updatedUser.matchedCount === 0) {
      res.status(422).json({ message: 'Usuário não encontrado!' })
      return
    }

    res.status(200).json(paciente)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.delete('/paciente/:id', async (req, res) => {
  const id = req.params.id

  const paciente = await Paciente.findOne({ _id: id })

  if (!paciente) {
    res.status(422).json({ message: 'Usuário não encontrado!' })
    return
  }

  try {
    await paciente.deleteOne({ _id: id })

    res.status(200).json({ message: 'Usuário removido com sucesso!' })
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

// Rotas Produto
app.post('/produto', async (req, res) => {
  const { item, quantidade, valor, fornecedor, validade, localizacaoNoEstoque, dataDeCompra, especie, tamanho, marca, imagem } = req.body

  const produto = {
    item,
    quantidade,
    valor,
    fornecedor,
    validade,
    localizacaoNoEstoque,
    dataDeCompra,
    especie,
    tamanho,
    marca,
    imagem
  }

  try {
    await Produto.create(produto)

    res.status(201).json({ message: 'Elemento inserido no sistema com sucesso!' })

  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.get('/produtos', async (req, res) => {
  try {
    const produtos = await Produto.find()

    res.status(200).json(produtos)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.patch('/produto/:id', async (req, res) => {
  const id = req.params.id

  const { item, quantidade, valor, fornecedor, validade, localizacaoNoEstoque, dataDeCompra, especie, tamanho, marca, imagem } = req.body

  const produto = {
    item,
    quantidade,
    valor,
    fornecedor,
    validade,
    localizacaoNoEstoque,
    dataDeCompra,
    especie,
    tamanho,
    marca,
    imagem
  }

  try {
    const updatedUser = await Produto.updateOne({ _id: id }, produto)

    if (updatedUser.matchedCount === 0) {
      res.status(422).json({ message: 'Usuário não encontrado!' })
      return
    }

    res.status(200).json(produto)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.delete('/produto/:id', async (req, res) => {
  const id = req.params.id

  const produto = await Produto.findOne({ _id: id })

  if (!produto) {
    res.status(422).json({ message: 'Usuário não encontrado!' })
    return
  }

  try {
    await Produto.deleteOne({ _id: id })

    res.status(200).json({ message: 'Usuário removido com sucesso!' })
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

// Rotas Atendimento
app.post('/atendimento', async (req, res) => {
  const { dia, hora, paciente, type, servicos } = req.body

  const atendimento = {
    dia,
    hora,
    paciente,
    type,
    servicos,
  }

  try {
    await Atendimento.create(atendimento)

    res.status(201).json({ message: 'Elemento inserido no sistema com sucesso!' })

  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.get('/atendimentos', async (req, res) => {
  try {
    const atendimentos = await Atendimento.find()

    res.status(200).json(atendimentos)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.patch('/atendimento/:id', async (req, res) => {
  const id = req.params.id

  const { dia, hora, paciente, type, servicos } = req.body

  const atendimento = {
    dia,
    hora,
    paciente,
    type,
    servicos,
  }

  try {
    const updatedUser = await Atendimento.updateOne({ _id: id }, atendimento)

    if (updatedUser.matchedCount === 0) {
      res.status(422).json({ message: 'Usuário não encontrado!' })
      return
    }

    res.status(200).json(atendimento)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.delete('/atendimento/:id', async (req, res) => {
  const id = req.params.id

  const atendimento = await Atendimento.findOne({ _id: id })

  if (!atendimento) {
    res.status(422).json({ message: 'Usuário não encontrado!' })
    return
  }

  try {
    await Atendimento.deleteOne({ _id: id })

    res.status(200).json({ message: 'Usuário removido com sucesso!' })
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

// Rotas Internacao
app.post('/internacao', async (req, res) => {
  const { entrada, hora, paciente, type, permanencia, observacoes } = req.body

  const internacao = {
    entrada,
    hora,
    paciente,
    type,
    permanencia,
    observacoes,
  }

  try {
    await Internacao.create(internacao)

    res.status(201).json({ message: 'Elemento inserido no sistema com sucesso!' })

  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.get('/internacoes', async (req, res) => {
  try {
    const internacoes = await Internacao.find()

    res.status(200).json(internacoes)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.patch('/internacao/:id', async (req, res) => {
  const id = req.params.id

  const { entrada, hora, paciente, type, permanencia, observacoes } = req.body

  const internacao = {
    entrada,
    hora,
    paciente,
    type,
    permanencia,
    observacoes,
  }

  try {
    const updatedUser = await Internacao.updateOne({ _id: id }, internacao)

    if (updatedUser.matchedCount === 0) {
      res.status(422).json({ message: 'Usuário não encontrado!' })
      return
    }

    res.status(200).json(internacao)
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})

app.delete('/internacao/:id', async (req, res) => {
  const id = req.params.id

  const internacao = await Internacao.findOne({ _id: id })

  if (!internacao) {
    res.status(422).json({ message: 'Usuário não encontrado!' })
    return
  }

  try {
    await Internacao.deleteOne({ _id: id })

    res.status(200).json({ message: 'Usuário removido com sucesso!' })
  } catch (error) {
    res.status(500).json({ erro: error })
  }
})