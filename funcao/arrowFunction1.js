//Arrow funtions tem sintaxe reduzida e possuem o this fixo em contexto léxico
//funções arrow tbm são anônimas, para chamá-las depois é necessário armazenar em uma variável ou constante

let dobro = function(a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //return implícito
//funções pequenas e específicas são favoráveis ao reuso
//ajuda a ter um código mais funcional fazendo composição de funções

console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá' //forma padrão
ola = _ => 'Olá' //possui um param mas que js deixa ignorar
console.log(ola())
