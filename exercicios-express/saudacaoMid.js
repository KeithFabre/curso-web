//função que retorna um middleware
function saudacao(nome) {
    return function(req, res, next) {
        console.log(`Welcome, ${nome}!`)
        next()
    }
}

module.exports = saudacao