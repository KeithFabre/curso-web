const gulp = require('gulp')
const concat = require('gulp-concat')
//const uglify = require('gulp-uglify') //tira os espaços em branco e deixa o arquivo o mais compactado possível, deixando o código o mais otimizado possível pra enviar pro browser
const babel = require('gulp-babel')

gulp.task('default', () => {
    return gulp.src('src/**/*.js') //pega todos os arquivos incluindo subpastas
        .pipe(babel({ //faz tradução de línguas para versões suportadas por todos os browsers 
            minified: true, //msm função do uglify
            comments: false, 
            presets: ["env"] //automaticamente determina os plugins necessários pro seu ambiente
        }))
        //.pipe(uglify())
        .on('error', function(err) { console.log(err) }) //pra que erros não fiquem silenciados
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))
})

