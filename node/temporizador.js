const schedule = require('node-schedule')

//seg min hora dia mês dia_da_semana(0 é domingo)
//* quer dizer qualquer um
// */5 quer dizer de 5 em 5 segundos
const tarefa1 = schedule.scheduleJob('*/5 * 22 * * 2', function() {
    console.log('Executando Tarefa 1!', new Date().getSeconds()) //para mostrar o segundo 
})

setTimeout(function() {
    tarefa1.cancel()
    console.log('Cancelando tarefa 1!') 
}, 20000) //cancelamento após 20 seg

//setImmediate (setTimeout zerado)
//setInterval (disparar função de tempos em tempos)

const regra = new schedule.RecurrenceRule() //recorrência
regra.dayOfWeek = [new schedule.Range(1, 5)] //de seg a sexta
regra.hour = 22
regra.second = 30

//agora com a regra de recorrência
const tarefa2 =  schedule.scheduleJob(regra, function() {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})

