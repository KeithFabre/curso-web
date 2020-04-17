const sequence = {
    _id: 1, //_ é uma convenção pra demonstrar que é um atributo interno
    get id() { return this._id++ } //com o get chama o atributo e internamente ele vai disparar a função
}

const produtos = {}

function salvarProduto(produto) { //retorna produto com id se já não estiver setado
    if (!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto //chave é o id e o valor é o produto
    return produto
}

function getProduto(id) {
    return produtos[id] || {}
}

function getProdutos() {
    return Object.values(produtos)
} 

function excluirProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto } //funções vizíveis fora do arquivo

