var gulp       = require('gulp');
var babel      = require('gulp-babel');
var changed    = require('gulp-changed');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('config', function () {
    var src = 'src/config/**/*.json';
    var dst = 'app/config/';

    return gulp.src(src)
        .pipe(changed(dst))
        .pipe(gulp.dest(dst));
});

gulp.task('default', ['config'], function () {
    var src = 'src/**/*.js';
    var dst = 'app';
    return gulp.src(src)
        .pipe(changed(dst))
        .pipe(sourcemaps.init())
            .pipe(babel({
                presets: ['es2015']
            }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dst));
});
