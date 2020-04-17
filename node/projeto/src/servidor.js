const porta = 3003 //porta é um processo dentro do computador, cada processo que se comunica com a rede precisa de uma porta única
//é a forma de selecionar qual processo vai atender aquela requisição
//æssociação de num e processo que comunica com a rede

const express =  require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

//com app.use manda pra qualquer url
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => { //retorna todos os produtos cadastrados
    res.send(bancoDeDados.getProdutos())
})

//retorna apenas um produto
app.get('/produtos/:id', (req, res, next) => { //: indica que é um parâmetro, id é o label
    res.send(bancoDeDados.getProduto(req.params.id)) //passa o param recebido através da requisição
})

//para submeter os dados e salvar um novo produto
app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome:  req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //resposta que veio do banco de dados (JSON)
})

//alterar
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome:  req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) 
})

//deletar
app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) 
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}`)
})