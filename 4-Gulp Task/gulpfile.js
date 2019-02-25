
const gulp = require('gulp');

gulp.task('sample',()=>{
return gulp.src('./src/sass/style.css')
.pipe(gulp.dest('./dist'));
});
// const {src,dest} = require('gulp');

// gulp.task('sample',()=>{
// return src('./src/sass/style.css')
// .pipe(dest('./dist'));
// });