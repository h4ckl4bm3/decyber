var gulp = require('gulp'),
    mainBowerFiles = require('main-bower-files'),
    bowerNormalizer = require('gulp-bower-normalize'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css');

gulp.task('bower', function () {
  return gulp.src(mainBowerFiles(), { base: './bower_components/' })
    .pipe(bowerNormalizer({ flatten: true }))
    .pipe(gulp.dest('./assets'));
});

gulp.task('uglify', function () {
  return gulp.src('./assets/js/**/*.js')
    .pipe(concat('theme.js'))
    .pipe(uglify({ preserveComments: 'license' }))
    .pipe(gulp.dest('./static/js/'));
});

gulp.task('minify-css', function () {
  gulp.src('./assets/css/**/*.css')
    .pipe(concat('theme.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('./static/css'));
});

gulp.task('dist', ['bower', 'uglify', 'minify-css']);
