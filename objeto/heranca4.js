function MeuObjeto() {
    console.log(MeuObjeto.prototype)
}

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__) //ao criar o obj a partir de uma função construtora usando new o protótipo do que foi criado aponta pra função construtora .prototype

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype //sai de object.prototype pra meuobjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

//Resumindo a loucura
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype) //são iguais
console.log(MeuObjeto.__proto__ == Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__) //depois de object .prototype não há nenhum objeto