console.log(Math.ceil(6.1)) //anotação . para acessar o log do console
//math.ceil arredonda pra cima

const obj1 = {}
obj1.nome = 'Bola' 
//obj1['nome'] = 'Bola1'
console.log(obj1.nome) 

function Obj(nome){
    this.nome = nome //o nome associado ao objeto criado, como o self na classe no python
    //fica vizível fora
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()