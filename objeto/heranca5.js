console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
//os três são function então os três tem atributo .prototype

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse()) //esse método não tem na API mas como foi adicionado no prototype pode ser usado

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())

//uma função que já existe tbm pode ser reescrita com esse método
