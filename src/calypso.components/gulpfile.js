var gulp = require("gulp");
var gulpUtil = require("gulp-util");
var webpack = require("gulp-webpack");
var rename = require("gulp-rename");
var concat = require('gulp-concat');
var templateCache = require('gulp-angular-templatecache');

var libs = [

]

var webpackConfig = {
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
};


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

gulp.task("calypso-main-webpack", function () {
    return gulp.src('wwwroot/main.ts')
    .pipe(webpack(webpackConfig))
    .pipe(rename("calypso.js"))
    .pipe(gulp.dest('dist/'));
});

gulp.task("calypso-core-webpack", function () {
    return gulp.src('wwwroot/core/core.module.ts')
    .pipe(webpack(webpackConfig))
    .pipe(rename("calypso-core.js"))
    .pipe(gulp.dest('dist/'));
});

gulp.task("calypso-footer-webpack", function () {
    return gulp.src('wwwroot/footer/footer.module.ts')
    .pipe(webpack(webpackConfig))
    .pipe(rename("calypso-footer.js"))
    .pipe(gulp.dest('dist/'));
});

gulp.task('calypso-template-cache', function () {
    return gulp.src('wwwroot/**/*.html')
        .pipe(templateCache({
            root: 'wwwroot/',
            module: "calypso"
        }))
        .pipe(concat('calypso.templates.js'))
        .pipe(gulp.dest('./dist/'));
});


gulp.task('watch', function () {
    gulp.watch([
        './wwwroot/**/*.ts', './wwwroot/**/*.html', './wwwroot/**/*.css'
    ], ['calypso-main-webpack', 'calypso-template-cache']);
});

gulp.task('default', ['calypso-template-cache', 'calypso-main-webpack', 'watch']);