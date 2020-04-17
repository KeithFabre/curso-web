//estrat 1 pra gerar valor padrão
function soma1(a, b, c) {
    a = a || 1 //com o ou dá pra trazer valor pra variavel se ela tiver valor falso
    b = b || 1
    c = c || 1
    return a + b + c
} //infelizmente o 0 vai retornar false, então vai assumir 1

console.log(soma1())

//estrat 2, 3, e 4
//Estrat 2
function soma2(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments  ? b : 1 
    c = isNaN(c) ? 1 : c //mais segura pra operações numéricas
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

//valor padrão do es2015
function soma3(a = 1, b = 1, c = 1){
    return a + b + c //não precisa mais testar nada
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))