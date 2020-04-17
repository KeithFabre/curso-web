const moduloA = require('./moduloa') //o exportado em móduloa fica nessa variável
const moduloB = require('./modulob') //o exportado em módulob fica nessa variável

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)