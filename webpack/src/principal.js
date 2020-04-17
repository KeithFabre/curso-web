//é possível misturar padrão ecma com padrão node, mas não é recomendado
import Pessoa from './pessoa' //padrão ecmascript
import './assets' //procura na pasta um arquivo index.js

const atendente = new Pessoa
console.log(atendente.cumprimentar())