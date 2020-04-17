const escola = [{
    nome: 'Turma M1', 
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}]

//extrair a noa de todos os alunos independente das turmas
const getNotaDoAluno = a => a.nota
const getNotasDaTurma = t => t.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1) //gera dois arrays com notas de cada turma

//um flat map gera um único array com notas de todas as turmas

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
    //a callback passada vai transformar os dados
    //o contexto do apply é um array vazio []
    //o resultado do map será um apply em cima da função concat
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)