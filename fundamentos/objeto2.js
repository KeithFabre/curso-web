console.log(typeof Object)
console.log(typeof new Object) //objeto gerado a partir de uma função

const Cliente = function(){}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {}
console.log(typeof Produto)
console.log(typeof new Produto())

//Em js quem exerce o papel da classe é a função
//Por baixo o que temos são funções
//funções podem ter atributos e comportamentos e podem ser instanciadas
