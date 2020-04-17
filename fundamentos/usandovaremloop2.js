const funcs = [] //array vazio

for (var i = 0; i < 10; i++){
    funcs.push(function(){ //adicionar novo elemento no array, adicionar função anônima e referenciar essa função através do array
        console.log(i)
    })
}
//vai criar uma nova função a cada índice do array que imprime o valor de i

funcs[2]()
funcs[8]()
//como var não tem escopo de função ele imprime o mesmo valor nos dois