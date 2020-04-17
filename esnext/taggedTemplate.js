//Processar a template string através de uma função
//mescar os valores pra gerar uma string com um parser diferente
//mescla parte, valor, parte, valor

function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra String'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag`${aluno} está ${situacao}.`)