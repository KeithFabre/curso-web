const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) //pega as chaves
console.log(Object.values(pessoa)) //pega os valores
console.log(Object.entries(pessoa)) //array com subarrays com coleções de pares chave valor

Object.entries(pessoa).forEach(([chave, valor]) => { //destructuring dos elementos do array
   console.log(`${chave}: ${valor}`) 
})

Object.defineProperty(pessoa, 'dataNascimento', { //tem mais controle 
    enumerable: true, //vai ser listado
    writable: false, //não vai permitir ser alterada
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2020' //não muda pq é writable false
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) //concatena os objs o1 e o2 ao obj dest
console.log(obj)

