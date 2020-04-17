const quaseArray = {
    0: 'Rafael',
    1: 'Ana',
    2: 'Bia'
}
console.log(quaseArray)

//obj vai representar todos os atributos dos atributos criados
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false, //função não vai aparecer no resultado final
})

console.log(quaseArray[0])

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray)

