  const aprovados = ['Agata', 'Aldo', 'Daniel', 'Raquel']
  
  //callback vai ser chamada a cada novo elemento
  aprovados.forEach(function(nome, indice) {
      console.log(`${indice + 1}) ${nome}`)
  })

aprovados.forEach(nome => console.log(nome))

const exibir = aprovado => console.log(aprovado)
aprovados.forEach(exibir)

//função callback passado ao forEach pode receber 3 parâmetros
//elemento, indice e array 