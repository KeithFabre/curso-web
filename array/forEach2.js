//criar método para simular o forEach com forEach2
//tem que retornar 3 parâmetros

//criando dentro de protpype do Array a função forEach2
Array.prototype.forEach2 =  function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

aprovados = ['Agata', 'Aldo', 'Daniel', 'Raquel']
  
aprovados.forEach2(function(nome, indice) { //forEach espera uma função callback
    console.log(`${indice + 1}) ${nome}`)
})

