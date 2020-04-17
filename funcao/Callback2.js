const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//extrair do array as notas menores ue 7
//Sem callback
const notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//Com callback
//para cada elemento será chamada essa função
//se der true é adicionado ao array, se der false não
//a função filter não altera o array original ,e cria um subarray
const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
}) 

console.log(notasBaixas2)

const notasMenorQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenorQue7) //com arrow function

console.log(notasBaixas3)