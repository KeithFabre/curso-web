//O this varia de acordo com a chamada, a função bind ajuda a arrumar isso

const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar() 
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e OO
//contextos diferentes

const falarPessoa = pessoa.falar.bind(pessoa) //no bind é passado um obj em que se deseja resolver o this
//agr o this erá resolvido para pessoa
falarPessoa() 
//o método falar n foi alterado, o bind retorna outra pessoa em que está amarrado o pesso a ela
//é útil para garantir que uma função dentro de um componente sempre aponte pro componente, independente das origens sempre deve apontar para o componente usando this

const falar2 = pessoa.falar
 falar2() //ainda dará undefined, o bind não mudou