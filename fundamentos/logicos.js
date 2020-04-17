function compras(trab1, trab2){
    const comprarsorvete = trab1 || trab2
    const comprartv50 = trab1 && trab2
    //const comprartv32 = !!(trab1 ^ trab2) //bitwise xor
    const comprartv32 = trab1 != trab2
    const saudavel = !comprarsorvete 

    return { comprarsorvete, comprartv50, comprartv32, saudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, false)) //pelo menos vc tá saudável :/ 