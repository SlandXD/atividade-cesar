const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))

app.get('/', (request, response) => {
  response.send('Envie os parâmetros n1 e n2 para as rotas /soma, /subtracao, /multiplicacao ou /divisao')
})

app.get('/soma', (req, res) => {
  const n1 = parseFloat(req.query.n1)
  const n2 = parseFloat(req.query.n2)
  const result = n1 + n2

  if (isNaN(result)) {
    res.send({ conta: 'Valores inválidos.' })
  } else {
    res.send({ conta: `${req.query.n1} + ${req.query.n2} = ${result}` })
  }
})

app.get('/subtracao', (req, res) => {
  const n1 = parseFloat(req.query.n1)
  const n2 = parseFloat(req.query.n2)
  const result = n1 - n2

  if (isNaN(result)) {
    res.send({ conta: 'Valores inválidos.' })
  } else {
    res.send({ conta: `${req.query.n1} - ${req.query.n2} = ${result}` })
  }
})

app.get('/multiplicacao', (req, res) => {
  const n1 = parseFloat(req.query.n1)
  const n2 = parseFloat(req.query.n2)
  const result = n1 * n2

  if (isNaN(result)) {
    res.send({ conta: 'Valores inválidos.' })
  } else {
    res.send({ conta: `${req.query.n1} * ${req.query.n2} = ${result}` })
  }
})

app.get('/divisao', (req, res) => {
  const n1 = parseFloat(req.query.n1)
  const n2 = parseFloat(req.query.n2)

  if (isNaN(n1) || isNaN(n2)) {
    res.send({ conta: 'Valores inválidos.' })
  } else if (n2 === 0) {
    res.send({ conta: 'Erro: não é possível dividir por zero.' })
  } else {
    res.send({ conta: `${req.query.n1} / ${req.query.n2} = ${n1 / n2}` })
  }
})

app.listen(8080)
