/**
 *
 * @authors Ted Shiu (ted@sitetag.us)
 * @date    2016-12-07 16:49:15
 */

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    cssmin = require('gulp-cssmin'),
    concat = require('gulp-concat'),
    autoprefixer = require('autoprefixer'),
    postcssApply = require('postcss-apply'),
    postcssVar = require('postcss-css-variables'),
    postcss = require('gulp-postcss');

var cssPath = './dev/**/',
    build = './src/',
    css ='simple_ui.css',
    processors = [
        autoprefixer({browsers: ['last 3 version']}),
        postcssApply,
        postcssVar
    ];

gulp.task('default', function (cb) {
    var options = {};
    watch(cssPath + '*.css', options, function (e) {
        console.log(new Date() + ' -- ' + e.history[0].replace(e.base, ''));
        gulp.src(cssPath + '*.css')
        .pipe(concat(css , {newLine: '\n'}))
        .pipe(postcss(processors))
        .pipe(cssmin())
        .pipe(gulp.dest(build));
    });
});
