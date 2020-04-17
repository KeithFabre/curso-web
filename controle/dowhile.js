function getInteiroAleatorioEntre(min, max){ 
    const valor = Math.random() * (max - min) + min //+ min para definir um valor inicial
    return Math.floor(valor)
}

let opcao = -1 //assim pode começar com -1 pq ele executa primeiro atéachar o -1

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}while(opcao != -1)

console.log('Até a próxima')