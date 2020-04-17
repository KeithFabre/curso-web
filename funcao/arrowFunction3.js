let comparaComThis = function(param) {
    console.log(this === param)
}

comparaComThis(global) //no contexto do node são iguais
//no browser o global se chama window
//Tomar cuidado ao mexer com o this pq estará no contexto global

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) 
comparaComThis(obj) //this nessa função aponta pro obj por conta do bind

let comparaComThisArrow = param => console.log(this === param)
//this não aponta mais pro global como uma função normal apontaria
comparaComThisArrow(global)
//na função arrow o this aponta pro obj corrente
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) //a arrow function vai ser mais forte que o bind
//this continuará apontando para o obj no contexto em que a função foi definida
//resultado será false mesmo tentando mudar a referência do this
comparaComThisArrow(module.exports)