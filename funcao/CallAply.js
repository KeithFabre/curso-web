//a diferença no call e aply é como os parâmetros são passados
function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 49990, desc: 0.20 }
//Com call e aply
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

//Com call: parâmetros são passados de uma vez (primeiro o contexto e depois os params)
console.log(getPreco.call(carro, 0.17, '$'))
//No apply os param são passados dentro de um array
console.log(getPreco.apply(global, [0.17, '$']))