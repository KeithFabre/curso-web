//usando a notação literal
const obj1 = {}
console.log(obj1)

//Object em Js
console.log(typeof Object, typeof new Object) //new object é o object criado a partir de uma função construtora
const obj2 = new Object
console.log(obj2)

//Funções construtoras (mesma da anterior mas é minha função que posso definir)
function Produto(nome, preco, desc){
    //preco e desconto estão encapsulados e não podem ser alterados fora do obj
    this.nome = nome //this torna atributos e métodos públicos
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Função factory (função que fabrica alguma coisa)
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome, 
        salarioBase, 
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)

console.log(f1.getSalario(), f2.getSalario())

//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Uma função famosa que retorna um obj (transformar json em obj)
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)
//útil para formulários, webservices, etc, que mandam json 
//no backend pode ser transformado em obj para ser trabalhado