function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

function Barreira(reversa = false) {
    this.elemento =  novoElemento('div', 'barreira') //elemento que será criado

    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')

    //se for barreira reversa primeiro aplica o corpo
    //se for barreira normal primeiro aplica a borda
    this.elemento.appendChild(reversa ? corpo : borda)
    //muda a ordem na segunda chamada, pra fazer normais e reversas
    this.elemento.appendChild(reversa ? borda : corpo)

    //ælterando altura
    this.setAltura = altura => corpo.style.height = `${altura}px`
} 


function parDeBarreiras(altura, abertura, x) {
    this.elemento = novoElemento('div', 'par-de-barreiras')

    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)

    this.elemento.appendChild(this.superior.elemento) //o que representa o elemento no DOM é o .elemento
    this.elemento.appendChild(this.inferior.elemento)

    //global por causa do this
    //abertura fixa, sorteia a altura da superior
    //inferior é subtraída do restante
    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura) //altura do jogo menos abertura coluna
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    //posição eixo x
    this.getX = () => parseInt(this.elemento.style.left.split('px')[0]) 
    this.setX = x => this.elemento.style.left = `${x}px`
    this.getLargura = () => this.elemento.clientWidth

    //sorteando abertura e definindo x
    this.sortearAbertura()
    this.setX(x)
}

//const b = new parDeBarreiras(700, 200, 400)
//document.querySelector('[flappy]').appendChild(b.elemento)

//controla múltiplas barreiras
function Barreiras(altura, largura, abertura, espaco, notificarPonto) {
    //quando uma barreira cruzar a callback do ponto será chamada
    this.pares = [ //barreiras que ficarão em
        new parDeBarreiras(altura, abertura, largura), //pos x da primeira barreira vai ser a largura, pra depois começar a animar
        new parDeBarreiras(altura, abertura, largura + espaco),
        new parDeBarreiras(altura, abertura, largura + espaco * 2),
        new parDeBarreiras(altura, abertura, largura + espaco * 3)
    ]

    const deslocamento = 3 //de 3 em 3 pixels (velocidade)
    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento)

            //quando deslocamento sair da área do jogo
            if (par.getX() < par.getLargura()) {
                par.setX(par.getX() + espaco * this.pares.length) //se torna 1 espaço distante da última barreira exibida no jogo
                par.sortearAbertura() //para aparecerem diferentes
            }

            const meio = largura / 2
            const cruzouOMeio  = par.getX() + deslocamento >= meio
                && par.getX() < meio
            if(cruzouOMeio) notificarPonto()
        })
    }
} 

function Passaro(alturaJogo) {
    let voando = false

    this.elemento = novoElemento('img', 'passaro')
    this.elemento.src = 'imgs/passaro.png'

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0]) 
    this.setY = y => this.elemento.style.bottom = `${y}px`

    window.onkeydown = e => voando = true 
    window.onkeyup = e => voando = false

    this.animar = () => {
        const novoY = this.getY() + (voando ? 10 : -5) //voa mais rápido do que cai
        const alturaMaxima = alturaJogo - this.elemento.clientHeight

        if(novoY <= 0) {
            this.setY(0)
        } else if (novoY >= alturaMaxima) {
            this.setY(alturaMaxima)
        } else {
            this.setY(novoY)
        }
    }

    this.setY(alturaJogo / 2) //no meio
}


function Progresso() {
    this.elemento = novoElemento('span', 'progresso')
    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos
    }
    this.atualizarPontos(0)
}

//verificando colisão (sobreposição de elementos)
//coisão precisa ser no eixo vertical e horizontal
function estaoSobrepostos(elementoA, elementoB) {
    const a = elementoA.getBoundingClientRect() //retângulo associaado ao elem
    const b = elementoB.getBoundingClientRect()

    //lado esquerdo como referência
    const horizontal = a.left + a.width >= b.left
        && b.left + b.width >= a.left
    const vertical = a.top + a.height >= b.top
        && b.top + b.height >= a.top
    
    return horizontal && vertical 
}

function colidiu(passaro, barreiras) {
    let colidiu = false
    barreiras.pares.forEach(parDeBarreiras => {
        //se ainda não tiver colidido
        if(!colidiu) { //verifica se colidiu ou não com a parte de cima e a de baixo em cada par
            const superior = parDeBarreiras.superior.elemento
            const inferior = parDeBarreiras.inferior.elemento
            colidiu = estaoSobrepostos(passaro.elemento, superior)
                || estaoSobrepostos(passaro.elemento, inferior)
        }
    })
    return colidiu
}




function flappyBird() {
    let pontos = 0

    const areaDoJogo = document.querySelector('[flappy]')
    const altura = areaDoJogo.clientHeight //altura da div
    const largura = areaDoJogo.clientWidth //largura da div

    const progresso = new Progresso()
    const barreiras = new Barreiras(altura, largura, 200, 400,
        () => progresso.atualizarPontos(++pontos))
    const passaro = new Passaro(altura)

    areaDoJogo.appendChild(progresso.elemento)
    areaDoJogo.appendChild(passaro.elemento)
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))

    //loop do jogo
    this.start = () => {
        const temporizador = setInterval(() => {
            barreiras.animar()
            passaro.animar()

            if(colidiu(passaro, barreiras)) {
                clearInterval(temporizador) //se colidir o jogo para
                alert('Game Over. Recarregue a página para recomeçar')
            }
        }, 20)
    }
}

//iniciando o jogo
new flappyBird().start()
 


