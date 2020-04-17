class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`) //de acordo com a chamada da função o this pode variar
    }
}

const p1 = new Pessoa('João')
p1.falar()

//o this não terá problema na função factory pq nem usa this
//o obj tem consciência de seu contexto léxico
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('João')
p2.falar()