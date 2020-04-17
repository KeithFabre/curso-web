require('./global') //carregando assim fica disponível no arquivo todo

console.log(minhaApp.saudacao())

minhaApp.nome = 'Eita!' //pode ser mudado em qualquer lugar sem o Object.freeze
console.log(minhaApp.nome)

