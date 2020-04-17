//para trasformar um  array em outro: map
//para filtrar o array: filter

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function(p) {
    //retornando true: estará no array final
    return false //array vazio
}))

const caro = produto => produto.preco >= 500

const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))