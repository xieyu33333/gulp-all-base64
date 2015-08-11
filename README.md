# gulp-all-base64 #
### 基础功能
将CSS文件中的图片url转为base64.
    
    gulp.src(*.css)
        .pipe(base64({
            baseDir: 'src/css'
        }))
        .pipe(gulp.dest('build'));

### 进阶功能
自己配置正则表达式，将html、js等其他格式文件中的图片转为base64.

    gulp.src(*.html)
        .pipe(base64({
            baseDir: 'src',
            fileType: 'html',
            rule: /images\/\w+\-\w+.png/g/
        }))
        .pipe(gulp.dest('build'));