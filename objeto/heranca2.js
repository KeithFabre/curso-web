//Cadeia de protótipos (prototype chain)
Object.prototype.atr0 = '0' //não faça isso em casa! Isso afeta a estrutura toda (object.prototype é o protótipo pai de todos os objs)
const avo = { atr1: 'A'}
const pai = { __proto__: avo, atr2: 'B' }
const filho = { __proto__: pai, atr3: 'C' }
console.log(filho.atr0, filho.atr1, filho.atr2, filho.atr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing (sombrear variável de escopo mais abrangente)
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` //usa o modelo do obj atual e o super invoca o método do protótipo
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari) //pega apenas o atributos pertencentes a ferrari no formato to string
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())