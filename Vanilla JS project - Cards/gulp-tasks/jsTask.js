const gulp = require('gulp');
const concat = require('gulp-concat');
const minifyjs = require('gulp-js-minify');

function jsBuild() {
    return gulp.src('src/js/**')
        // .pipe(concat('scripts.min.js'))
        // .pipe(minifyjs())
        .pipe(gulp.dest('dist/js'));
}

exports.js = jsBuild;