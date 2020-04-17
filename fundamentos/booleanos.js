let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1 //representa o valor verdadeiro
console.log(!!isAtivo) //negação duas vezes mostra o valor em bool, para descobrir se o valor é true ou false
console.log(!isAtivo)

console.log('os verdadeiros...') //todos os num inteiros são true com excessão do 0
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = 30)) //pega o valor e não se a atribuição deu certo ou não

console.log('os falsos...')
console.log(!!0)
console.log(!!'') //string vazia
console.log(!!null)
console.log(!!NaN) //Not a Number
console.log(!!undefined)
console.log(!!(isAtivo = null)) //olha pro que foi atribuido pra variável

console.log('para finalizar...')
console.log(!!('' || null || 0 || ' '))
