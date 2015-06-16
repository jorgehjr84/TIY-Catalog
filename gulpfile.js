var gulp = require('gulp');

gulp.task('do-something', function() {




  console.log(arguments);
  console.log('I did something');
})

gulp.task('sass', function() {
  var sass = require('gulp-sass');
  gulp.src('src/scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css/main.css'))
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('dist/css/'))
}); //End of gulp.task(sass)
gulp.watch('watch:sass', function() {

  gulp.watch('src/scss/*.scss', ['sass'], function() {
    console.log('File changed');
  });
  gulp.watch('src/index.html', ['build']);

})


gulp.task('build', ['sass'], function() {

  //! means no scss files
  gulp.src(['src/*', '!src/scss']) //this is basically (gulpfrom())

  .pipe(gulp.dest('dist/')); //.dest refers to the destination. This is basically(gulp .into)
  //We are piping to a destination

});