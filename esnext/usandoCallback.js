//motivação para usar promisse ao invés da callback
const http = require('http')

const getTurma = (letra, callback) => { 
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = '' //resultado recebe string vazia

        res.on('data', dados => { //concatena os dados que chegarem como string na variável resultado
            resultado += dados //quando receber os dados concatena
        })

        res.on('end', () => {
            callback(JSON.parse(resultado)) //quando acabar de receber faz JSON.parse
        })
    })
}

//Callback Hell: uma callback dentro da outra, dentro da outra
//pode ser resolvido de forma melhor com promise

let nomes = []
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(b => `B: ${b.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(c => `C: ${c.nome}`))
            console.log(nomes)
        })
    })
})
