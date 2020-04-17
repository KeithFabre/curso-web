const moduloA = require('../../moduloa')
console.log(moduloA.ola)

const c = require('./pastaC/index')
console.log(c.ola2)

//tbm dá pra importar os modulos que vem com o node (core)
const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)