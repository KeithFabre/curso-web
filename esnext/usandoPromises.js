//Usando promise
const http = require('http')

const getTurma = (letra) => { 
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = '' 
            //dados vão chegando e vai compondo
            //quando o resultado fica completo (end) chama o resolve
            res.on('data', dados => { 
                resultado += dados 
            })
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e) //caso ocorra o parse de algo que não é json cai aqui
                }
            })
        })
    })
}


//com then é uma promisse dentro da outra
/*let nomes = []
getTurma('A').then(alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B').then(alunos => {
        nomes = nomes.concat(alunos.map(b => `B: ${b.nome}`))
        getTurma('C').then(alunos => {
            nomes = nomes.concat(alunos.map(c => `C: ${c.nome}`))
            console.log(nomes)
        })
    })
})*/

//com promise all podem ser passadas várias promises
//quando todas forem resolvidas é chamada a cadeia dos métodos then
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')]) //array de promises que serão resolvidas ou rejeitadas
    .then(turmas => [].concat(...turmas)) //spread no método concat (único array com todos os alunos)
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message) //tratamento de erro (importante)

getTurma('D').catch(e => console.log(e.message))