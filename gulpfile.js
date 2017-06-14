var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
    babel = require('gulp-babel'),
    reload = browserSync.reload;

var path = {
	build:{
		html: 'build/',
		js: 'build/js/',
		css: 'build/css/',
		img: 'build/img/'
	},
	src: {
		html: 'src/index.html',
		js: 'src/js/main.js',
    style: 'src/style/main.css',
    img: 'src/img/**/*.*'
	},
	watch: {
		html: 'src/**/*.html',
		js: 'src/js/**/*.js',
		style: 'src/style/**/*.scss',
		img: 'src/img/**/*.*',
	},
	clean: './build'
};

var config = {
	server: {
		baseDir: './build'
	},
	tunnel:true,
	host:'localhost',
	port:9000,
	logPrefix:"Frontent_Devil"
}

gulp.task('preHTML', function(){
  gulp.src('src/firstSlide.html')
    .pipe(rigger())
    .pipe(gulp.dest('src/preHTML'))
});


gulp.task('html:build',()=>{
  gulp.src('mob/build/index.html')
  .pipe(rigger())
  .pipe(gulp.dest('all/build/'))
  .pipe(reload({stream:true}));
})

//
// gulp.task('js:build', function () {
//   gulp.src(path.src.js) //Найдем наш main файл
//   .pipe(rigger()) //Прогоним через rigger
//   .pipe(babel({
//     presets:['es2015']
//   }))
//   .pipe(sourcemaps.init()) //Инициализируем sourcemap
//   .pipe(sourcemaps.write()) //Пропишем карты
//   .pipe(gulp.dest(path.build.js)) //Выплюнем готовый файл в build
//   .pipe(reload({stream: true})); //И перезагрузим сервер
// });
//
//
gulp.task('style:build',function(){
  gulp.src('all/main.css')
    .pipe(cssmin())
    .pipe(prefixer())
    .pipe(gulp.dest('all/build/'))
})
//
//
// // gulp.task('img:build',function(){
// //   gulp.src(path.src.img)
// //   .pipe()
// // })
