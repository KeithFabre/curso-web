//Object.preventExtensions (não dá pra adicionar novos atributos)
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha branca'
delete produto.tag
console.log(produto)

//Object.seal (não é possível adicionar ou excluir atributos)
const pessoa = {
    nome: 'Juliana',
    idade: 35
}

Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade= 29
console.log(pessoa)

//Object.freeze (objeto selado com valores constantes)
