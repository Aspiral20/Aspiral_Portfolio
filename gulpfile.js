'use strict';

const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const concatCss = require('gulp-concat-css');

sass.compiler = require('node-sass');

exports.sass = function () {
    return src('./src/styles/main.scss')
        //Для больше 1 файла используем массив:
        // (['./src/styles/main.scss', './src/styles/additional.scss'])
        //Преобразовали в CSS
        .pipe(sass().on('error', sass.logError))
        //Concat all files CSS
        .pipe(concatCss("main.css"))
        //Minimize file
        // .pipe(cssmin())
        //File.min.css
        // .pipe(rename({suffix: '.min'}))
        //Сохранить в папку dist
        .pipe(dest('./dist'));
}

exports.sassWatch = function () {
    //Auto-save when choose css code
    watch('./src/styles/*.scss', series('sass'));
}