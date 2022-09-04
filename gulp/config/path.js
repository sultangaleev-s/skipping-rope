import * as nodePath from 'path'; //импорт модуля с помощью синтаксиса ES6
const rooFolder = nodePath.basename(nodePath.resolve()); //получаем имя папки проекта

const buildFolder = `./dist`; //путь к результату 
const srcFolder = `./src`; //путь к исходникам

export const path = {
    build: {
        files: `${buildFolder}/files/`,//готовые файлы
        html: `${buildFolder}/`,
        images: `${buildFolder}/img/`,
        css: `${buildFolder}/css/`,
        js: `${buildFolder}/js/`,
        fonts: `${buildFolder}/fonts/`,
    },
    src: {
        files: `${srcFolder}/files/**/*.*`, //копирование из
        images: [`${srcFolder}/img/**/*.jpeg`, `${srcFolder}/img/**/*.jpg`, `${srcFolder}/img/**/*.png`, `${srcFolder}/img/**/*.gid`, `${srcFolder}/img/**/*.webp`, `${srcFolder}/img/**/*.ico`,],
        svg: `${srcFolder}/img/**/*.svg`,
        html: `${srcFolder}/*.html`,
        scss: `${srcFolder}/scss/style.scss`,
        js: `${srcFolder}/js/app.js`,
        svgicons: `${srcFolder}/img/svgicons/*.svg`,
    },
    watch: {
        files: `${srcFolder}/files/**/*.*`, //слежение за файлами
        images: [`${srcFolder}/img/**/*.jpeg`, `${srcFolder}/img/**/*.jpg`, `${srcFolder}/img/**/*.png`, `${srcFolder}/img/**/*.gid`, `${srcFolder}/img/**/*.webp`, `${srcFolder}/img/**/*.ico`, `${srcFolder}/img/**/*.svg`,],
        html: `${srcFolder}/**/*.html`,
        scss: `${srcFolder}/scss/**/*.scss`,
        js: `${srcFolder}/js/**/*.js`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rooFolder,
    ftp: `` //имя папки на сервере
}