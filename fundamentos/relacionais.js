//As comparações usando operador relacional dão True ou False
console.log( '01)', '1' == 1)
console.log( '02)', '1' === 1) //considera os tipos (estritamente igual)
console.log( '03)', '3' != 1) //considerando o valor
console.log( '03)', '3' !== 1) //estritamente diferente

console.log( '05)', 3 < 2)
console.log( '06)', 3 > 2)
console.log( '07)', 3 <= 2)
console.log( '08)', 3 >= 2)

const d1 = new Date(0) //0 significa data de referência em js, 1 de janeiro de 1970
const d2 = new Date(0)
console.log( '09)', d1 === d2)
console.log( '10)', d1 == d2) 
//nos dois casos dá falso pq ele compara referência de memória
console.log( '11)', d1.getTime() == d2.getTime()) //comparar o number

console.log( '12)', undefined == null)
console.log( '13)', undefined === null) //melhor usar o estritamente igual do que a igualdade pq ele leva em consideração tbm o tipo das variáveis
