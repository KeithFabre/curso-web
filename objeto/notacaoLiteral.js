const a = 1
const b = 2
const c = 3

const obj1 = { a:a, b:b, c:c }
const obj2 = { a, b, c } //não precisa de : se não quiser mudar o nome do atributo
console.log(obj1, obj2)

const nomeAtr = 'nota'
const valorAtr = 7.87

const obj3 = {}
obj3[nomeAtr] = valorAtr
console.log(obj3)

const obj4 = {[nomeAtr]: valorAtr}
console.log(obj4)

const obj5 = {
    funcao1: function(){
        //...
    },
    funcao2() { //forma mais reduzida de criar função dentro do obj
        //...
    },
}
console.log(obj5)