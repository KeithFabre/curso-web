//herança: objetivo é reusar o código e herdar características e comportamentos
//Entre herança e composição priorizar composição
//Um obj pode ser composto de muitos objetos e dar uma flexibilidade maior
//Um obj criado por padrão aponta para object.prototype (exceto quando é criado por sua função construtora)
//[[Prototype]] != prototype
//Object é uma função e por ser uma função tem o atributo prototype

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__) //ferrari.__proto__ para acessar o protótipo, procura na cadeia de protótipos
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ ) //object.proto
console.log(Object.prototype.__proto__ === null)

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)

