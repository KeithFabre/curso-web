//função construtora funciona como uma classe

function Carro(velocidadeMaxima = 200, delta = 5) { 
    //atributo privado (pertence apenas ao escopo da função)
    let velocidadeAtual = 0

    //método público (usando this)
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima //para não crescer d+
        }
    }

    //método público
    this.getVelocidadeAtual = function() {
        return velocidadeAtual 
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)
