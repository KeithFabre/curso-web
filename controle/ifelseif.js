//criando função entre para reutilizar depois
Number.prototype.entre = function (inicio, fim){
    //como é number acessa o valor atual com this
    return this >= inicio && this <= fim //se o this estiver entre o início e o fim retorna verdadeiro
}

const imprimirResultado = function(nota) {
    if (nota.entre(9, 10)){
        console.log('Quadro de Honra')
    } else if (nota.entre(7, 8.99)){
        console.log('Aprovado')
    } else if (nota.entre(3, 6.99)){
        console.log('Recuperação')
    } else if (nota.entre(0, 2.99)){
        console.log('Reprovado')
    } else {
        console.log('Nota inválida')
    }
}

imprimirResultado(1000)
imprimirResultado(10)
imprimirResultado(4)
imprimirResultado(2)