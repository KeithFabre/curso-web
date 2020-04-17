const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() //retorna uma função factory, o () é pra invocá-la
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor) //mudou junto por causa do cache, por causa das mudanças no contA o contB vai sentir por ser inst única

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor) //valor não foi alterado
console.log(contadorC.valor)


