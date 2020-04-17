function soma() {
    let soma = 0
    for (i in arguments) { //toda função tem o array arguments disponível
        soma += arguments[i] //quando nenhum parâmetro é passado esse array está vazio
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(2, 2))
console.log(soma(2, 2, 4, 5, 6, 7)) //dá pra passar parâmetros variáveis
console.log(soma(a, b)) //tm pode concatenar