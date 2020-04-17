//Concatenar vários arrays ou elemento sem um novo array

const filhas = ['Uasleskah', 'Cibalena']
const filhos = ['Uoxinton', 'Uesclei']
const todos = filhas.concat(filhos, 'Fulano') //além de concat. adiciona mais um elemento
console.log(todos, filhas, filhos)

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))
