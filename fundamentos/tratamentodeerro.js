//Usando Try, catch e throw
//Try: bloco de código do que vc julga que pode gerar algum tipo de erro
//Catch: quando ocorre algum erro ou exceção cai no catch, lançando erro pode finalizar o progama ou tratá-lo
//Trow: para enviar um erro
//Finally: bloco que será executado caso ocorra erro ou não

//Evitar mostrar detalhes demais para o usuário, gerar mensagens genéricas ou gerar um hash

function tratarErroeLancar(erro){
    //throw new Error('Ocorreu um erro')
    //throw 10
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.mesage,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e){
        tratarErroeLancar(e)
    } finally {
        console.log('final')
    }
     
}

const obj = { nome: 'Roberto' } //para não dar erro correto seria name
imprimirNomeGritado(obj)

