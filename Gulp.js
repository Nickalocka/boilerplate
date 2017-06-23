var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('_styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./_dist/'));
});

var concat = require('gulp-concat');

var files = [
    '_Scripts/vendor/jquery.js',
    '_Scripts/_app.js',
    '_Scripts/**/*.js'
];
 
gulp.task('scripts', function() {
  return gulp.src(files)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./_dist/'));
});

gulp.task('watch', function () {
    gulp.watch('_styles/**/*.scss', ['styles']);
    gulp.watch('_scripts/**/_*.js', ['scripts']);
});

gulp.task('default', ['watch']);