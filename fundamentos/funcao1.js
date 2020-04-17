//função é um trecho de código nomeado que pode ser chamado em qualquer parte do programa

//Função sem retorno
function imprimirSoma(a, b) { //recebe parâmetros a e b
    console.log(a + b)
} 

imprimirSoma(2, 3)
imprimirSoma(2) //segundo valor vai ser undefined, e o resultado vai ser NaN
imprimirSoma(2, 3, 4, 5) //soma os dois primeiros e ignora o resto
imprimirSoma() //NaN

//Função com retorno
function soma (a, b = 1) { //por padrão b é 1 quando não for passado na chamada da função
    return a + b
} 

console.log(soma(2, 4))
console.log(soma(2)) //considerou o segundo parâmentro 1

