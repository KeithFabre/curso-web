//reduce serve para transformar um array em outro elemento
//tem parâmetro que é acumulado de chamada em chamada e é passado pra próx função
//recebe um callback e pode receber um valor inicial
//reduce tem a ideia de agregar/reduzir os valores em um só

const alunos = [
    { nome: 'João', nota: 7.3, bolsista:  false },
    { nome: 'Maria', nota: 9.2, bolsista:  true },
    { nome: 'Pedro', nota: 9.8, bolsista:  false },
    { nome: 'Ana', nota: 8.7, bolsista:  true }
]

console.log(alunos.map(a => a.nota))

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual) //os elementos do array se tornam o acumulador e o atual
    return acumulador + atual //o resultado da callback anterior é passado como acumulador
}, 0) //depois da callback é passado o valor inicial

//na primeira execução é passado o valor anterior e o atual se não tiver valor inicial definido
//o resultado da callback é passado como acumulador para a próx
//o acumulador pode ser m array, um obj, um número, etc

console.log(resultado)

