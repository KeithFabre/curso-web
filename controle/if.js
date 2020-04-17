function noticias(nota){
    if (nota>=7){
        console.log('Aprovado com '+ nota)
    }
}
noticias(7)

function seforverdade(valor){
    if(valor){
        console.log('É verdade que '+ valor)
    }
}

seforverdade('') //string vazia dá false
seforverdade('oi')