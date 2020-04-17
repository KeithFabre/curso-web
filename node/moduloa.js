//Importante saber como a aplicação é organizada
//Usando o node ele pode funcionar como um servidor apache, web que provê arquivos, gera conteúdo dinâmico e pode ser API do sistema

//um aplicação em node é organizada em pastas e em arquivos
//dentro do node um arquivo representa um módulo (módulo não deixa o que está escrito dentro dele disponível pra todos)
//pra deixar vizível é necessário exportar e importar onde for necessário

///formas de exportar
this.ola = 'Fala aí' 
exports.bemVindo = 'Bem vindo ao Node!' 
module.exports.ateLogo = 'Até logo'
