const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec() //imprime  'Global' por causa do contexto léxico onde a função foi escrita
//a função carrega consigo a informação do contexto onde foi declarada
//procura não no local de execução da função mas no local onde foi definida