function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++ //por causa dessa arrow function o this não irá variar nesse contexto
        console.log(this.idade)
    }, 1000)
}

new Pessoa //msm o temporizador chamando a função ainda irá funcionar normalmente 
//com arrow function o this não varia dependendo de quem chama