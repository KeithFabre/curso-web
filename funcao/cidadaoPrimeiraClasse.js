//Função em JS é First-Class Object: quando a ling trata a função como um dado
// Higher Order Function
//Função é tratada como se fosse um dado e assim pode ser tratada como parâmetro, pode ser armazenada em uma variável

//criar de forma literal
function fun1() { }

//Armazenar em uma variável
const fun2 = function(){ }

//Armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

//Armazenar em atributo de objeto
const obj = {}
obj.falar = function () { return 'Oi' }
console.log(obj.falar())

//Passar função como parâmetro pra outra função
function run(fun) {
    fun()
}

run(function() { console.log('Executando...') })

//Uma função pode retornar/conter uma outra função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4) //como o resultado é uma função o trceiro param pode ser informado
const cincoMais = soma(2, 3)
cincoMais(4) //tbm pode armazenar em uma variável e depois chamar de novo