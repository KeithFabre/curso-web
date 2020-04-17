console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports) //exports aponta pra msm referência

function logThis() {
    console.log('Dentro de uma função')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}
logThis() //dentro de uma função o this não aponta pra exports, só fora

//This dentro da função aponta para global (vizível fora do módulo)
//This fora da função aponta para module.exports



