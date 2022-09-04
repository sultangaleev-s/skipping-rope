import fileinclude from "gulp-file-include";
import webpHtmlNosvg from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";

export const html = () => {
    //ищем фаилы html
    return app.gulp.src(app.path.src.html)
    //сообщение об ошибке
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "HTML",
            message: "Error: <%= error.message %>"
        })
    ))
    //импортирование из других файлов
    .pipe(fileinclude())
    //подмена @img на 'img/'
    .pipe(app.plugins.replace(/@img\//g, 'img/'))
    //подключение webp к тегу img
    .pipe(
        app.plugins.if(
            app.isBuild,
            webpHtmlNosvg()
        )
    )
    //устанавливает версию сборки, что бы не происходило кеширования сайта у заказчика
    .pipe(
        app.plugins.if(
            app.isBuild,
            versionNumber({
                'value': '%DT%',
                'append': {
                    'key': '_v',
                    'cover': 0,
                    'to': [
                        'css',
                        'js',
                    ]
                },
                'output': {
                    'file': 'gulp/version.json'
                }    
            })
        )
    )
    //выгрузка html 
    .pipe(app.gulp.dest(app.path.build.html))
    //наблюдатель
    .pipe(app.plugins.browsersync.stream())
}