function area(largura, altura){
    const area = largura * altura
    if (area>20){
        console.log('Valor altão') //vai printar isso e retornar undefined
    } else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(11, 2))