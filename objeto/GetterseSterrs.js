//Uma das técnicas para ter encapsulamento no código é:
//colocar os atributos privados e ter métodos que alteram esses atributos de forma mais controlada
//Alterando atributos diretamente não dá pra impedir valores inconsistentes no obj
//Para ter isso muitas pessoas transformam os atributos em privados (algo que js não tem) e acessam esses atributos a partir de métodos especiais:
//Getters (let) e Setters (alterar)
//a vantagem de acessar o valor na função é poder tratar e conferir o valor antes de retornar
//js não aceita sobrecarga de métodos a não ser no get e set

const sequencia = {
    _valor: 1, //convenção (mostra que se pretende acionar a variável internamente)
    get valor() { return this._valor++ },
    set valor(valor) { 
        if (valor > this._valor) { //validação
            this._valor =  valor //só faz se o valor foi maior
        } 
    } 
}

console.log(sequencia.valor, sequencia.valor) //chama métodos get e set
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 //ignora esse set por causa da validação
console.log(sequencia.valor, sequencia.valor)