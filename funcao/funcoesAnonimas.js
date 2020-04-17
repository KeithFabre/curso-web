//função anônima é uma função sem nome
const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)

imprimirResultado(3, 4, function (x, y) {
    return x - y
})

imprimirResultado(3, 4, (x, y) => x * y) //arrow function é sempre anônima

//outro ex de função anônima é a função dentro do obj
const pessoa = {
    falar: function() { //tbm pode ser escrito sem a palavra function
        console.log('oi')
    }
}

pessoa.falar()