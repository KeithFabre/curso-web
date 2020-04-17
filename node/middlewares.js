//um padrão de projeto é uma solução pra um problema recorrente
//com as adaptações necessárias para cada problema
//middleware pattern (chain of responsability)
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3' //não chama o next

const exec = (ctx, ...middlewares) => { //...midlewares recebe várias funções e junta num array middlewares
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
        middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo3, passo2)
console.log(ctx)