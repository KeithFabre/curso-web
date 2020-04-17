//array em js é um obj especial, não existe um tipo de dados array
//ele organiza os dados a partir de uma estrutua indexada de íncide 0
//array é dinâmico e heterogêneo
//porém não e bom trabalhar com dados heterogêneos no array (diferentes)

//um array constante pode ser mudado, msm que criado a partir de uma constante
//o endereço de memória não muda mas o conteúdo do array pode mudar

console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana') //forma n muito recomendada
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) //undefined

aprovados[3] = 'Paulo' //substitui
aprovados.push('Abia') //para adicionar novo elemento no array
console.log(aprovados.length)

aprovados[9] = 'Rafael' //valores do meio serão undefined
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() //ordena o array original
console.log(aprovados)

delete aprovados[1] //atribui undefined na posição 1
console.log(aprovados[1])
console.log(aprovados[2]) //continua o mesmo

aprovados  = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'elemento1', 'elemento2') //no índice 1 exclui 2 elementos e adiciona mais 2 elementos
//para não excluir nenhum colocar 0 
console.log(aprovados)
//método splice permite exclui e adicionar elementos no índice
//.splice(índice, qt de elementos a excluir, elementos a serem adicionados no índice)
