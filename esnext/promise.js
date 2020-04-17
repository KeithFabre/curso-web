//promise é usada quando se deseja algum tipo de processamento
//assíncrono (quando demora um tempo)
//Tem dois destinos: promessa cumprida ou rejeitada

function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => { //resolve e reject são funções que serão chamadas
        setTimeout(() => { //delay
            resolve(frase) //aciona quando promessa é atendida, só ceita um parâmetro, se precisar de mais de um passar obj
        }, segundos * 1000) 
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?!')) //then é chamada quando a promisse é resolvida
    .then(outraFase => console.log(outraFase))
    .catch(e => console.log(e)) //para quando o reject for acionado tratar o erro
