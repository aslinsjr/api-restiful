const express = require('express')
const app = express()
const mongoose = require('mongoose')

const Usuario = require('./models/Usuario')

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
  res.json({ message: "Oá Mundo! \n GET Usuários - /usuarios" });
});

app.post('/usuario', async (req, res) => {
  const { nome, nascimento, email, telefone, senha} = req.body

  const usuario = {
    nome,
    nascimento,
    email,
    telefone,
    senha
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

  const { nome, sobrenome, idade, saldo, tranzacoes } = req.body

  const usuario = {
    nome,
    sobrenome,
    idade,
    saldo,
    tranzacoes
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