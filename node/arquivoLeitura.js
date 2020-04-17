const fs = require('fs')

const caminho = __dirname + '/arquivo.json' //__dirname representa o diretório atual

//lendo de forma síncrona (se for um arquivo mt pesado vai atrasar o event loop)
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//leitura assíncrona (mais interessante): é chamada uma callback quando o arquivo é lido para fazer os tratamentos
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo) 
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json') //require converte o arquivo json direto pra obj
console.log(config.db) //esse console.log executa antes da resposta do readfile

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos) //lê os arquivos na pasta 
})
