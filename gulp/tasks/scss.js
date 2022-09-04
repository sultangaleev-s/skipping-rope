import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";

import cleanCss from "gulp-clean-css"; //сжатие css
import webpcss from "gulp-webpcss"; //вывод webp изображений
import autoprefixer from "gulp-autoprefixer"; //добавление префиксов
import groupCssMediaQueries from "gulp-group-css-media-queries"; //группировка медиа запросов

const sass = gulpSass(dartSass);

export const scss = () => {
    //берем файл style.scss
    return app.gulp.src(app.path.src.scss, {sourcemaps: app.isDev })
    //сообщение об ошибке
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "SCSS",
            message: "Error: <%= error.message %>"
        })
    ))
    //замена @img на ../img/
    .pipe(app.plugins.replace(/@img\//g, '../img/'))
    //конвертирует scss в css
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    //собирает одинокавые медиазапросы в один
    .pipe(
        app.plugins.if(
            app.isBuild,
            groupCssMediaQueries()
        )
    )
    //подключает класс для изображений webp
    .pipe(
        app.plugins.if(
            app.isBuild,
            webpcss({
                webpClass: ".webp",
                noWebpClass: ".no-webp"
            })
        )
    )
    //разставляет префиксы для рзных браузеров
    .pipe(
        app.plugins.if(
            app.isBuild,
            autoprefixer({
                grid: true, //поддержка грид
                overrideBrowserslist: ["last 3 versions"], //количество версии браузера 3 версии назад
                cascade: true //каскад
            })
        )
    )
    //выгрузка стилей до сжатия
    .pipe(app.gulp.dest(app.path.build.css)) 
    //сжатие стилей
    .pipe(
        app.plugins.if(
            app.isBuild,
            cleanCss()
        )
    )
    //переименование файла со стилями
    .pipe(rename({
        extname: ".min.css"
    }))
    //выгрузка
    .pipe(app.gulp.dest(app.path.build.css))
    //наблюдатель
    .pipe(app.plugins.browsersync.stream());
}