const gulp = require('gulp')
const cheerio = require('gulp-cheerio')
const replace = require('gulp-replace')
const svgSpriteCreate = require('gulp-svg-sprite')
const svgMin = require('gulp-svgmin')

module.exports = function svgSprite() {
  return gulp.src('src/img/sprite/*.svg')
    .pipe(svgMin({ js2svg: {pretty: true}}))
    .pipe(cheerio({
      run: function($) {
        $('[fill]').removeAttr('fill')
        $('[stroke]').removeAttr('stroke')
        $('[style]').removeAttr('style')
      },
      parserOptions: { xmlMode: true }
    }))
    .pipe(replace('&gt;', '>'))
    .pipe(svgSpriteCreate({
      mode: {
        symbol: {
          sprite: 'sprite.svg'
        }
      }
    }))
    .pipe(gulp.dest('build/img'))
}