//JSON é um formato de dados para interoperabilidade entre sistemas
//Formato que não carrega nada específico de um sistema ou tecnologia
const obj = {
    a: 1, b:2, c:3, 
    soma() { return a + b + c }
}
//obj -> JSON
console.log(JSON.stringify(obj)) //retorna em texto e a função é excluída por ser um formato de dados

//JSON -> obj
//console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
console.log(JSON.parse('{ "a": 1.2, "b": "string", "c": true, "d": {}, "e": [] }'))
