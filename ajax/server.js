const bodyParser = require('body-parser')
const express = require('express')
const app = express()

//middleware: função que é executada quando requisição chegar
//pode ser aplicado para todas as req ou um padrão de url
app.use(express.static('.')) //provê os arquivos estáticos
app.use(bodyParser.urlencoded({ extended: true })) //transforma em obj se vier em formulário
app.use(bodyParser.json()) //transforma em obj se vier em json

const multer = require('multer') //p interpretar o form que veio o arquivo do upload

const storage = multer.diskStorage({
    //personaliza pasta e nome do arquivo
    destination: function(req, file, callback) {
        callback(null, './upload')
    },
    filename: function(req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

//interpreta o upload que vem a partir da req ajax no servidor
const upload = multer({ storage }).single('arquivo') //arquivo virá com nome 'arquivo'

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if(err) {
            return res.end('Ocorreu um erro.')
        }
        res.end('Concluído com sucesso.')
    })
})

app.post('/formulario', (req, res) => {
    //necessário body parser configurado pra interpretar dados a partir da req
    res.send({
        ...req.body, //spread
        id: 1
    })
})

app.get('/parOuImpar', (req, res) => {
    //Formas diferentes: req.body
    //req.query
    //req.params
    const par = parseInt(req.query.numero) %  2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})


app.listen(8080, () => console.log('Executando...'))