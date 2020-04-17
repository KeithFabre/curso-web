const express = require('express')
const app = express()
const bodyParser = require('body-parser') //faz um parser no corpo do request e joga esses dados dentro do request.body

app.use(bodyParser.urlencoded({ extended: true })) //o body parser cria um obj preenchido através do request e permite acessar com request.body

app.post('/usuarios', (req, resp) => {
    console.log(req.body) //mostra no corpo da requisição o nome que vem com atributo nome, como definido no html
    resp.send('<h1>Parabéns. Uuário Incluído!!</h1>') //manda pro browser
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body) //mostra no corpo da requisição o nome que vem com atributo nome, como definido no html
    resp.send('<h1>Parabéns. Usuário Alterado!!</h1>') //manda pro browser
})

app.listen(3003)

