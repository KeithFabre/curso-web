//json (javascript object notation): formato textual, diferente de objeto 
//o nome é porque surgiu a partir do js

//Objeto pode ser criado de forma literal, declarando vazio e acrescentando os objetos ou definindo os objetos inicialmente
//Outra coisa é o json, que é um formato textual para comunicação entre sistemas, uma forma de trocar dados entre sistemas


const prod1 = {} //par de chaves indica o objeto, {} indica objeto vazio
prod1.nome = 'Celular Ultra Mega' //o nome foi criado dinamicamente no objeto
//Objeto em js é uma coleção de chave e valor
//um objeto pode ter outro objeto dentro dele
prod1.preco = 4998.90 
prod1['Desconto'] = 0.40 //evitar atributos com espaço

console.log(prod1) 

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod2)
//chave: indetificador e depois é atribuído valor 

