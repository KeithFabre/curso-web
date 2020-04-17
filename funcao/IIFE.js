//Immediately Invoked Function Expression
//Função auto-invocada
//Na hora da declaração já invoca a execução da função
//É útil no browser pq assim o que está na função foge do escopo global

(function() {
    console.log('Será executado na hora')
    console.log('Foge do escopo mais abrangente')
})()

