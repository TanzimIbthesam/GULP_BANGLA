
const gulp = require('gulp');//we need this dependancy
const sass=require('gulp-sass');
const browserSync=require('browser-sync');

gulp.task('sass',()=>{
return gulp //
.src('./src/sass/**/*.scss')//* means it can prcess any files with scss extension
.pipe(sass({
    outputStyle:'compressed'
}).on('error', sass.logError)
)
.pipe(gulp.dest('./dist'));//transfer scss file to dist 
});
gulp.task('server', ()=> {
    browserSync.init({
        server: {
            baseDir: './dist'
        } 
    });
});
gulp.task('html', ()=> {
   return gulp.src('./src/*.html').pipe(gulp.dest('./dist'));
});