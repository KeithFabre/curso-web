//Par nome/valor
const saudacao = 'Opa' //contexto léxico 1 (local onde a variável foi definida fisicamente no código), léxico tem a ver com palavra

function exec(){
    const saudacao = 'Falaí' //contexto léxico 2
    return saudacao
}
//como as saudacao estão em contextos diferentes não rola conflito

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 22,
    peso: 90,
    endereco: {
        logradouro: 'Rua bonitona',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)