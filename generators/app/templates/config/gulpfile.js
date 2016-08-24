
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('pug2html', function() {
  gulp.src('src/views/*.pug')
  .pipe(pug({
  	pretty : true
  }))
  .on('error', console.log.bind(console))
  .pipe(gulp.dest('dist/'))
});

gulp.task('js.min',function(){
	gulp.src('src/js/*.js')
	.pipe(concat('front.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js/'));
})

gulp.task('scss2css',function(){
	gulp.src('src/scss/main.scss')
	.pipe(sass())
	.pipe(autoprefixer())
	.on('error', sass.logError)
	.pipe(gulp.dest('dist/css/'));
})

gulp.task('listening',function(){
	gulp.watch('src/views/*.pug',['pug2html']);
	gulp.watch('src/scss/**/*.scss',['scss2css']);
})

gulp.task('default',['listening']);