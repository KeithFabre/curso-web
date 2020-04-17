//Função factory é uma função que retorna um obj

//Factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa()) //sempre que executar retornará uma nova instância
 