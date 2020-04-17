//Código não executável 

//Procedural
processamento(valor1, valor2, valor3) //função que manipula dados

//OO (mudou o foco, há dados e dentro deles funções)
objeto = {
    valor1,
    valor2,
    valor3,
    processamento(){
        //...
    }
}
//foco passou a ser o obj
objeto.processamento() //função processamento pertence ao obj
//obj funciona como a cápsula

//Princípios importantes
//1. Abstração (trazer o mundo real para o seu sistema, mapear o mundo e levar para o software)
//2. Encapsulamento (interface simples para interagir com o obj) (uma dependência grande dos objetos, chamada de acoplamento, torna a evolução dos sistemas complicada)
//Escondendo os detalhes de implemetação e deixando apenas uma interface de comunicação visível pro mundo exterior, as chances de haver alto acoplamento são menores
//3. Herança (prototype) --> receber atributos e comportamentos de um obj pai
//Algumas linguagens permitem herança múltipla, mas js só permite 1 pai
//Priorizar a composição (tem um) ao invés de herança
//4. Polimorfismo (múltiplas formas) --> Através do conceito genérico usar para criar outros objetos
//Ex: carro --> pode ser ferrari, uno, fusca
