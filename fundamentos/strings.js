const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) //js não gera o erro, e coloca um espaço em branco
console.log(escola.charCodeAt(3)) //valor na tabela unicode
console.log(escola.indexOf('3'))

console.log(escola.substring(1)) //Vai do índice 1 até o final
console.log(escola.substring(0, 3)) //Vai do índice 0 até o 3, sem incluir o 3

console.log('Escola '.concat(escola).concat("!")) //concatenando strings, pode usar '' ou ""
console.log(escola.replace(3, 'e')) //substitui o que está no índice 3 por e
console.log(escola.replace(/\d/, 'e')) //substitui todos os dígitos por e
console.log(escola.replace(/\w/g, 'e')) //substitui tudo por e

//uma string separada por vírgula tbm pode ser substituída por um array
console.log('Ana,Maria,Pedro'.split(',')) //gera um array com 3 elementos separados


