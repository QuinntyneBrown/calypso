var gulp = require("gulp");
var gulpUtil = require("gulp-util");
var webpack = require("gulp-webpack");
var rename = require("gulp-rename");
var concat = require('gulp-concat');
var templateCache = require('gulp-angular-templatecache');

var libs = [

]

var paths = {
    npm: './node_modules/',
    lib: './lib/'
};

gulp.task('libs', function () {
    return gulp.src(libs).pipe(gulp.dest(paths.lib));
});

gulp.task('calyspso-components-css', function () {
    return gulp.src(["wwwroot/**/*.css"])
      .pipe(concat('calypso-components.css'))
      .pipe(gulp.dest('./dist/'));
});

gulp.task("calypso-core-webpack", function () {
    return gulp.src('wwwroot/core/core.module.ts')
    .pipe(webpack({
        resolve: {
            extensions: ["", ".js", ".ts"]
        },
        module: {
            loaders: [
                {
                    test: /\.ts$/, loader: "ts", exclude: [/node_modules/]
                },
                {
                    test: /\.css$/, exclude: [/node_modules/], loader: "style-loader!css-loader"
                }
            ]
        }
    }))
    .pipe(rename("calypso-core.js"))
    .pipe(gulp.dest('dist/'));
});

gulp.task('template-cache', function () {
    return gulp.src('src/**/*.html')
        .pipe(templateCache({
            root: 'src/',
            module: "calypso.components.library"
        }))
        .pipe(concat('appTemplates.js'))
        .pipe(gulp.dest('./dist/'));
});


gulp.task('watch', function () {
    gulp.watch([
        './wwwroot/**/*.ts', './wwwroot/**/*.html', './wwwroot/**/*.css'
    ], ['template-cache', 'calypso-components-css', 'calypso-components-webpack']);
});

gulp.task('default', ['calypso-components-css', 'calypso-core-webpack', 'template-cache', 'watch']);