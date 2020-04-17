function Pessoa(){
    this.idade = 0 

    const self = this //self recebe a referência de this
    setInterval(function(){ //dispara uma outra função a partir de um intervalo definido
        self.idade++ //mudando o this por self
        console.log(self.idade)
    }/*.bind(this)*/, 1000) //intervalo em ms 
}

new Pessoa //sem bind retorna NaN
//tbm pode ser driblado o fato do this variar criando uma constante e acessando essa constante dentro da função
//assim o this é cravado nesse contexto