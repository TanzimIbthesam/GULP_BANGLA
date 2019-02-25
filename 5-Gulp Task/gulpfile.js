
const gulp = require('gulp');
const sass=require('gulp-sass');

gulp.task('sample',()=>{
return gulp
.src('./src/sass/style.scss')
.pipe(sass()) 
.pipe(gulp.dest('./dist'));
});
// const {src,dest} = require('gulp');

// gulp.task('sample',()=>{
// return src('./src/sass/style.css')
// .pipe(dest('./dist'));
// });