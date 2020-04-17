//as chaves indicam que será passado um objeto para essa função tirar de dentro do objeto os atributos mim e max prontos sem precisar usar a notação ponto
function rand({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

//na função usa o operador destructuring e quando a função é instanciada se usa um objeto
obj = { max: 500, min: 40}
console.log(rand(obj))


