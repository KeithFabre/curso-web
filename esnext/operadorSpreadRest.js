//operador ...rest(juntar)/spread(espalhar)
//usar rest com parâmetro de função (passar vários params para uma função)

//usar spread com objeto
const funcionario = {  nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

//usar spread com array
const grupoA = ['Joao', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA, 'Bruno']
console.log(grupoFinal)