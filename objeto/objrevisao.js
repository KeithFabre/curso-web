//coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica' //tbm dá pra acessar assim e usar
produto.preco = 220


console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        },
    },
    condutores: [{ //pode ter array de objetos (conjunto de objs)
        nome: 'Junior',
        idade: 19,
    }, {
        nome: 'Ana',
        idade: 42,
    }],

    calcularValorSeguro: function(){
        //... tbm pode ter função no objeto
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
//console.log(carro.condutores.length) acessar o atributo comprimento de algo indefinido gera erro
//tomar cuidado ao acessar atributo de algo indefinido ou nulo