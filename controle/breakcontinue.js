//break funciona em switch, for e while
//continue funciona em for e while
//seus usos são desencorajados, desviar fluxos pode trazer mais confusão do que clareza
const nums = [1, 2 , 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums){
    if (x == 5) break //o break age em cima do bloco mais próx dele, o mais próx que no caso é o for
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums){
    if (y == 5) continue //continue interrompe a repetição atual e vai pra próx repetição
    console.log(`${y} = ${nums[y]}`)
}

//break sai do laço corrente
//continue interrompe a repetição corrente e vai pra próx repetição
//continue só faz sentido em estruturas de repetição, o break tbm age no switch

externo: //rótulo 
for (a in nums) {
    for (b in nums){
        if (a==2 && b ==3) break externo
        //através do rótulo o break não age sobre o laço mais interno, e sim sobre o rótulo todo
        console.log(`Par = ${a}, ${b}`)
    }
} //evitar usar esse tipo de estrutura, utilizar métodos ou etc ao invés de breaks com rótulos
//o ideal é juntar em pequenas funções com diferentes funcionalidades, sem usar estruturas que desviam o fluxo

console.log('Fim!')