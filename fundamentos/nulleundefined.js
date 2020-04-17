let valor //variável começa undefined  
console.log(valor)
valor = null //definiu-se que ela não aponta pra nenhum endereço e está vazia
console.log(valor)
//quando desejar zerar o valor de uma variável que aponta pra algum lugar usar null

const produto = {}
console.log(produto.preco) //undefined
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evitar atribuir undefined
console.log(!!produto.preco)
//delete produto.preco //para tirar o atributo de um objeto
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco) //dá pra usar em lógica vendo se o produto está setado
console.log(produto)

//usar o nulo, e deixar o programa colocar o undefined







/* __________________TESTES___________________
const a = {name: 'Teste'}
//o que a constante tem é o endereço onde o objeto está localizado
const b = a
//b armazena agora o endereço de onde a está localizado, mudando em b tbm mudará em a
//os dois apontam no mesmo local de memória
//isso foi uma atribuição por referência
b.name = 'Opa'
//agora a terá 'Opa'
console.log(a)

//OUTRA ALTERNATIVA PARA ATRIBUIÇÃO POR REFERÊNCIA
let c = 3 //variável c
let d = c 
d++
console.log(c)
console.log(d)
//nesse caso, por ser de tipos primitvos ocorreu uma cópia do valor
//Em objetos, funcções, etc a passagem é por referência
*/