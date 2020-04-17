/*
Array é heterogêneo (linguagem fracamente tipada)
Array não possui tamanho fixo
*/

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
//ao acessar um elemento que não existe no índice ele dá undefined o invés de dar erro

console.log(valores.length)
valores.push(10, 11)
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores) //no js o array é do tipo object