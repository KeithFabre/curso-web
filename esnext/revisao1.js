//let e const 

{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)
//console.log(b) //b não está definida fora do bloco

// Template String
const produto = 'IPad'
console.log(`${produto} é 
caro!`) //permite quebra de linha

// Destructuring (tirar de dentro da estrutura)
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade:i, nome:n } = { nome: 'Ana', idade: 9 }
console.log(i, n)