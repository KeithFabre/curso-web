//há melhores formas de percorrer um array, mas  não são estruturas de controle e sim do array (estará no cap de array)
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
//parece o for do python
for (let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome:'Silva',
    idade: 29,
    peso: 64
}

for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

console.log(atributo) //usando let se garante que o índice e o atributo sejam variáveis locais dentro do laço

