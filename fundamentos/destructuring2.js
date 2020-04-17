const [a]= [10] //criei uma variável a que recebeu o primeiro elemento do array: 10
console.log(a)
//tomar cuidado com a diferença entre criar um array e fazer destructuring

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] //segue a ordem ignorando os valores 2 e 4 de índice
//múltiplos elementos foram extraídos do array e atribuídos
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)