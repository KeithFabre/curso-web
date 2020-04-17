//Estrutura para múltiplas selecões 
//Uma vez que executa o primeiro vai executando todos abaixo, o ideal seria usar um único caso
//para sair é necessário o break
//Em Go, é diferente, para executar todos abaixo é necessário mandar com fall trhough

const imprimirResultados = function(nota){
    switch (Math.floor(nota)){
        case 10: //se for 10 ou 9 executa aquele linha de código
        case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
        case 3: case 2: case 1: case 0:
            console.log('Nota inválida')
        default:
            console.log('Nota inválida')
    }
}

imprimirResultados(6) 
