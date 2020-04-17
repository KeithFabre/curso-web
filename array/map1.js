//ideia do map é mapear pra outro array de mesmo tamanho mas com os dados transformados
//map é um for com propósito que gera outro array

const nums  = [1, 2, 3, 4, 5]

let resultado  =  nums.map(function(e) { //dentro do map é passada a função para transformar os elementos
    return e * 2 //método de map precisa de retorno
})

console.log(resultado)

const soma10 = e => e + 10 //função arrow com retorno implícito
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)