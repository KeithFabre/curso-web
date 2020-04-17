//random dá um valor dentre 0 e 1, multiplicando esse valor pelo intervalo se consegue um range maior
function getInteiroAleatorioEntre(min, max){ 
    const valor = Math.random() * (max - min) + min //+ min para definir um valor inicial
    return Math.floor(valor)
}

let opcao = 0

while(opcao != -1){
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima')