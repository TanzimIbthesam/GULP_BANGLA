
const gulp = require('gulp');//we need this dependancy
const sass=require('gulp-sass');

gulp.task('sample',()=>{
return gulp //
.src('./src/sass/**/*.scss')//* means it can prcess any files with scss extension
.pipe(sass({
    outputStyle:'compressed'
}).on('error', sass.logError)
)
.pipe(gulp.dest('./dist'));//transfer scss file to dist 
});
