//no obj a chave é apenas um literal
//no map a chave pode se ruma função, um número, um obj
//map não substiui o obj mas pode ser interessante

const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angulae', { framework: true })

console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function() {}, 'Função'], //função como chave, valor texto
    [{}, 'Objeto'], //chave obj literal
    [123, 'Número'] //chave numérico
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size) //elementos contidos no map

chavesVariadas.set(123, 'a')
chavesVariadas.set(456, 'b')
chavesVariadas.set(123, 'b') //substitui, chave não acieta repetições
console.log(chavesVariadas)

