//ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.keys(obj)) //chaves
console.log(Object.values(obj)) //valores
console.log(Object.entries(obj)) //array com chaves e valores

//Melhorias na notação literal
const nome = 'Carla'
const pessoa = {
    nome, //já cria o atributo sem precisar de nome:nome
    ola() { //funções n precisam mais de function
        return 'Oi gente!'
    }
}
console.log(pessoa.nome, pessoa.ola())

//Class (porém uma classe internamente será convertida para uma função)
class Animal {}
class Cachorro extends Animal { //herança por protótipo (os dois viram função)
    falar() {
        return 'Au au'
    }
}
//para criar objetos a partir de uma classe se usa a palavra new
//a partir de uma função construtora tbm é possível criar novas
//instâncias a partir do operador new

console.log(new Cachorro().falar())

