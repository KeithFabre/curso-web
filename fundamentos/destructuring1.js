//Operador que tira algo da estrutura, como tirar atributos ou elementos de um array
//Quando trabalha no âmbito de obj se usa {} na sintaxe
//No âmbito de array se usa [] na sintaxe
//novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5, 
    endereco: {
        logradouro: 'Abc',
        numero: '1000'
    }
}

//{} representam o operador destructuring
const { nome, idade } = pessoa //tirar de dentro do objeto o atributo nome e idade
console.log(nome, idade) //agora há duas variáveis no programa pra trabalhar: nome e pessoa

const { nome: n, idade: i } = pessoa //para atribuir a diferentes variáveis
console.log(n, i) 

const { sobrenome, legal = true } = pessoa //se não vier nada de dentro do objeto atribui true a 'legal'
console.log(sobrenome, legal) 

const { endereco: { logradouro, numero, cep } } = pessoa 
console.log(logradouro, numero, cep)

