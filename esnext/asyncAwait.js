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

//deixando o código mais parecido com síncrono
//REcurso do ES8
//Objetivo de simplificar o uso de promises
//usar await permite que só vai pro próx passo se for resolvida

let obterAlunos = async () => {
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta, tb, tc)
} //retorna um obj AsyncFunction (usando then se obtém acesso ao que a função retornou)

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))

    