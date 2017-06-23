var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('styles', function() {
    gulp.src('_styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./_dist/assets/css'));
});

var files = [
    '_scripts/vendor/jquery.min.js',
    '_scripts/_app.js',
    '_scripts/**/_*.js'
];
 
gulp.task('scripts', function() {
  return gulp.src(files)
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./_dist/assets/js'));
});

gulp.task('watch', function () {
    gulp.watch('_styles/**/*.scss', ['styles']);
    gulp.watch('_scripts/**/_*.js', ['scripts']);
});

gulp.task('default', ['watch']);