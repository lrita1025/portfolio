var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
// var uglifycss = require('gulp-uglifycss');
var compass = require('gulp-compass');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
var gulpLivereload = require('gulp-livereload');
var prefix = require('gulp-autoprefixer');


//合併js
gulp.task('gulp-js', function() {
    return gulp.src('src/js/*.js')
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

//合併sass
gulp.task('gulp-sass', function() {
    return gulp.src('src/sass/*.sass')

    .pipe(compass({
            css: 'src/css/', // compass 輸出位置
            sass: 'src/sass/', // sass 來源路徑
            image: 'src/images/', // 圖片來源路徑
            style: 'compressed', // CSS 處理方式，預設 nested（expanded, nested, compact, compressed）
            comments: false, // 是否要註解，預設(true)

        }))
        .pipe(gulp.dest('src/css/'))
        .pipe(gulpLivereload())
        .pipe(prefix());
});

// watch
gulp.task('watch', function() {
    gulp.watch('src/js/*.js', ['gulp-js']);
    gulp.watch('src/sass/*.sass', ['gulp-sass']);
});


//壓縮js
gulp.task('watch-js', function() {
    gulp.watch(['src/js/*.js']).on('change', function(event) {
        if (event.type === 'changed') {
            return gulp.src('src/js/*.js')
                .pipe(concat('app.min.js'))
                .pipe(uglify())
                .pipe(gulp.dest('dist/js'));
        }
    });
});

gulp.task('watch-css', function() {
    gulp.watch(['src/css/*.css']).on('change', function(event) {
        if (event.type === 'changed') {
            return gulp.src('src/css/*.css')
                .pipe(concat('style.css'))
                .pipe(uglifycss())
                .pipe(gulp.dest('dist/css'));
        }
    });
});

// 縮編 css
gulp.task('concat-css', function() {
    return gulp.src('src/css/*.css')
        .pipe(concat('style.css'))
        .pipe(uglifycss())
        .pipe(gulp.dest('dist/css'));
});


gulp.task('default', ['gulp-sass', 'gulp-js']);