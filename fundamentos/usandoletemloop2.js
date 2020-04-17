const funcs = [] //array vazio

for (let i = 0; i < 10; i++){
    funcs.push(function(){ //adicionar novo elemento no array, adicionar função anônima e referenciar essa função através do array
        console.log(i)
    })
}
//vai criar uma nova função a cada índice do array que imprime o valor de i

funcs[2]()
funcs[8]()
//let imprime corretamente pq tem escopo de bloco
//uma função em js tem consciência do local em que foi definida