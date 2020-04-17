{{{{ var sera = 'Será?'}}}}

console.log(sera)

/*outras linguagens de programação tem o conceito de escopo:
Onde a sua variável é vizível e até onde é acessível
Com o exemplo acima, em outras linguagens, a variável estaria vizível apenas no bloco
A variável var estará vizível fora do bloco, mesmo estando dentro do bloco
Uma variável com var tem apenas dois escopos possíveis: global ou no escopo de uma função
*/

function teste() {
    var local = 123
}

teste()
console.log(local) //Não vai ser vizível
//Quando a variável é definida dentro da função seu escopo é apenas na função
//Quando a variável vai pro escopo global podem haver problemas na sobrescrita

