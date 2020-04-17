const gulp = require('gulp')
const util = require('gulp-util')
const sequence = require('run-sequence') //pra definir sequências importantes ao invés de executar em paralelo (só funciona se tiver o return)

//app.js, deps.js e servidor.js tbm fazem parte do build
require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/servidor')

gulp.task('default', () => {
    if(util.env.production) { //quando recebe a flag production
        sequence('deps', 'app') //executa deps e app em seq
        //gulp.start('deps', 'app')
    } else {
        sequence('deps', 'app', 'servidor')
        //gulp.start('deps', 'app', 'servidor')
    }
})