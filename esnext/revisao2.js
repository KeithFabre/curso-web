//Arrow Function
const soma = (a, b) => a + b
console.log(soma(2, 3))

//Arrow function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()
//Em funções tradicionais em js o this pode variar de acordo com
//a chamada da função, ou mudars e mudarmos o contexto a partir do 
//bind ou com call ou apply
//Numa função arrow isso não é possível, o this se mantém no contexto
//em que a função e definida

//parâmetro default (valor padrão no caso de undefined)
function log(texto = 'Node') {
    console.log(texto)
}
log()
log('Sou mais forte')

//operador rest (parâmetros espalhados são agrupados em uma estrutura do tipo array)
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))