const gulp = require('gulp')

//nome e função que será chamada quando essa task for executada
//task default é porta de entrada
gulp.task('default', () => {
    gulp.start('copiar', 'fim') //tasks para executar
})

//array terá as dependências que precisam ser executadas antes da task
//antes de executar precisa de duas outras tasks como pré requisito
gulp.task('copiar', ['antes1', 'antes2'], () => {
    return gulp.src('pastaA/*.txt') //arquivos usados para fazer os trabalhos
        //.pipe(transformacao1)
        //.pipe(transformacao2)
        .pipe(gulp.dest('pastaB'))
})

gulp.task('antes1', () => {
    console.log('antes1')
})

gulp.task('antes2', () => {
    console.log('antes2')
})
//task apenas chama outras tasks como pré-requisitos
gulp.task('fim', ['fim1', 'fim2'])

gulp.task('fim1', () => {
    console.log('Fim1')
})

gulp.task('fim2', () => {
    console.log('Fim2')
})

