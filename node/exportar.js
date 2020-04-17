console.log(module.exports === this )
console.log(module.exports === exports )

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

exports = {
    nome: 'Teste'
}

console.log(module.exports) //assim irá continuar o mesmo

//Sempre que for atribuir um novo obj a ser exportado é necessário usar module.exports

//o this e o exports são só duas referências ao obj que module.exports aponta