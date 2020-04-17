let num1 = 1
let num2 = 2

num1++ //acrescenta pra 2
console.log(num1)
--num1
console.log(num1) //forma pré fixada tem precedência maior  

console.log(++num1 === num2--) //dá true pq num2 só é decrementado depois da comparação
console.log(num1 === num2) //agora que já decrementou num2 dá false
//evitar usar decremento e incremento em comparações 
//Fugir de códigos complexos, manter a simplicidade
//comentar pouco e deixar só comentários relevantes 