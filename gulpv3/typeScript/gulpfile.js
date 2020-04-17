const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')


gulp.task('default', () => {
    return tsProject.src() //src já foi definido
        .pipe(tsProject()) //compila o código typescript pra javascript
        .on('error', function(err) { console.log(err) })
        .pipe(gulp.dest('build'))
})