function teste1(num){
    if(num > 7)
        console.log(num) //if dispensa chaves se só tiver uma sentença de código
        console.log('Final') //não faz parte do if, sempre vai ser executado
}
teste1(8)
teste1(6)

function teste2(num){
    if (num > 7); { //cuidado com o ';', não usar em estruturas de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)