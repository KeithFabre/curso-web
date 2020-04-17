const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

//Imperativo
//forma de ensinar exatamente os passos sem deixar nada faltando
//O Como  tem que ser feito é mais importanto do que tem que ser feito
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota //atribuição aditiva
}
console.log(total1 / alunos.length)

//Declarativo
//O que tem que ser feito é mais importante do que como
//São passados apenas o critério
//Abordagem mais interessante porque:
//Permite reuso (funções podem ser reutilizadas)
//A forma de escrever o código fica mais clara
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
//métodos que podem ser reusados
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

//ex com sql:
//select codigo, nome, email, from clientes where ativo = 1
//Essa abordagem é mais declarativa 