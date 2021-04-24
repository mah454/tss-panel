const { series } = require('gulp');
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

function style() {
    return gulp.src('./app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./app/css'))
        .pipe(browserSync.stream());
}

function copy() {
    // gulp.src('./node_modules/jquery/dist/jquery.min.js')
    //     .pipe(gulp.dest('./app/js/'));
    // gulp.src('./node_modules/jquery-ui-dist/jquery-ui.min.js')
    //     .pipe(gulp.dest('./app/js/'));
    // gulp.src('./node_modules/split-grid/dist/split-grid.min.js')
    //     .pipe(gulp.dest('./app/js/'));
    // return gulp.src('./node_modules/split-grid/dist/split-grid.min.js.map')
    //     .pipe(gulp.dest('./app/js/'));
    // return gulp.src('./node_modules/jquery-ui-dist/jquery-ui.theme.min.css')
    //     .pipe(gulp.dest('./app/css/'));

}

function watch() {
    browserSync.init({
        server: {
            baseDir: './app/'
        },
        browser: "google-chrome"
    });
    gulp.watch("./app/scss/**/*.scss", style);
    gulp.watch("./app/**/*.html").on('change', browserSync.reload);
    gulp.watch("./app/js/**/*.js").on('change', browserSync.reload);
}



exports.default = series(style, watch);
