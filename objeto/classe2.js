class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome //obj instanciado vai ter atributo sobrenome
    }
}

class Pai extends Avo {//função gerada a partir dessa classe terá como protótipo outra função que será gerada a partir da classe Avo
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome) //chama o construtor na função avo passando sobrenome
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva') //vai assumir a profissão professor
    }
}

const filho = new Filho 
console.log(filho)