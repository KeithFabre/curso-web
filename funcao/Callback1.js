//O padrão mais usado na web é o observer, que as pessoas chamam de callback
const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

//a ideia do callback é passar uma função para quando ocorrer um evento
//disparar a função

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))

//um exemplo comum é quando é feita uma chamada AJAX
//em requisições AJAX é passada para a requisição uma callback
//que será chamada quando a resposta chegar
//pode haver callback de sucesso, ou de erro