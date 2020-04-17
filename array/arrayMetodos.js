const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
//constante piloto sempre vai apontar pra esse array mas o conteúdo do array pode ser alterado

pilotos.pop() //massa quebou o carro e vai sair! (remove último)
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //remove primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') //coloca no primeiro
console.log(pilotos)

//splice pode adicionar e remover elementos
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover 
pilotos.splice(3, 1) //massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //gera novo array a partir do índice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //vai até o íncide 4 sem incluir o índice 4
console.log(algunsPilotos2)

