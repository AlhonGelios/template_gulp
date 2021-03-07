const gulp = require('gulp')
const webp = require('gulp-webp')

module.exports = function convertWebp() {
    return gulp.src('src/img/*.{jpg,jpeg,png}')
        .pipe(webp())
        .pipe(gulp.dest('build/img'))
}