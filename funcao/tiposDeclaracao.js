//interpretador já tem as funções declaradas com function declaration 
console.log(soma(3, 4))

//function declaration
function soma(x, y){ //definindo assim primeiro o interpretador carrega as funções e as deixa prontas
    return x + y
} 

//funtion expression
const sub = function (x, y) {
    return x - y
}

//named function expression (n é mt usada, só possui vantagem na hora de debugar por ter nome)
const mult = function mult(x, y){
    return x * y
}

