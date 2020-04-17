const imprimirResultado = function(nota){
    if(nota >= 7){
        console.log('Resultado')
    } else{
        console.log('Reprovado')
    }
}

imprimirResultado(4)
imprimirResultado(8)
imprimirResultado('Epa')//tomar cuidado com js: linguagem fracamente tipada
//poderia haver tratamento de erro pq não se trata de valor numérico

