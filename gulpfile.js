var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function () {
    gulp.src('_styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./_dist/assets/css'));
});

gulp.task('autoprefixer', function () {
    gulp.src('./_dist/assets/css/styles.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./_dist/assets/css'))
});

var files = [
    '_scripts/vendor/jquery.min.js',
    '_scripts/_app.js',
    '_scripts/**/_*.js'
];

gulp.task('scripts', function () {
    return gulp.src(files)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./_dist/assets/js'));
});

gulp.task('watch', function () {
    gulp.watch('_styles/**/*.scss', ['styles']);
    gulp.watch('./_dist/assets/css/styles.css', ['autoprefixer']);
    gulp.watch('_scripts/**/_*.js', ['scripts']);
});

gulp.task('default', ['watch']);