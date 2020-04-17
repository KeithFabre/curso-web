//Armazenando função em uma variável
const imprimirSoma = function (a, b){ //função anônima (sem nome)
    console.log(a + b)
}

imprimirSoma(2, 3)

//Armazenando função arrow em uma variável => forma reduzida de escrever uma função
const soma = (a, b) => { //a seta substitui o nome function
    return a + b
}

console.log(soma(2, 3))

//retorno implícito
const subtracao = (a, b) => a - b //quando não tem {} a função executa apenas uma única sentença de código
//retorna o resultado, se  tiver apenas um parâmetro não precisa de parênteses
console.log(subtracao(2, 3))

const imprimir = a => console.log(a)
imprimir('Legall')

const print = b => console.log(b)
print('Vo deixa tudo iguau o pytho hihih')