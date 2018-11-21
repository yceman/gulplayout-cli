const gulp = require('gulp'),
      sass = require('gulp-sass');

gulp.task('sass', ()=>
  gulp.src('./src/scss/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./src/css'))
);
      

/*function defaultTask(cb){
    // place code for your default task here
    cb();
}*/

/*exports.default = function(){
    return src('src/scss/*.scss')
    .pipe(dest('src/css'));
}*/
