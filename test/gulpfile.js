var base64 = require('gulp-all-base64');
var gulp = require('gulp');

gulp.task('default', function () {

    return gulp.src('src/css/*.css')

        .pipe(base64({baseDir: 'src/css'}))

        .pipe(gulp.dest('dist'));

});