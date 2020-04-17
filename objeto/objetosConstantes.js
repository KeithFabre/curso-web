//pessoa -> 123 -> {...} (pessoa aponta pra um endereço que aponta pra um obj)
const pessoa = {nome: 'Joao'} //o que está nesse endereço pode ser alterado, a constante pessoa que não
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa <- 456 -> {...} (pessoa recebe um endereço que aponta pra outro obj)
//pessoa = { nome: 'Ana' } //como pessoa é const sempre aponta pro obj 123, logo isso gera um problema

Object.freeze(pessoa) //congelando obj pessoa, não dá mais pra mexer
pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa) //ignora a tentativa de atribuição
//congela todo o objeto, não deixa mexer em nada

