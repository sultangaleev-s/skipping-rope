import webp from "gulp-webp";
import imagemin from "gulp-imagemin";

export const images = () => {
    //берем картинки из src
    return app.gulp.src(app.path.src.images)
    //сообщение об ошибке
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "IMAGES",
            message: "Error: <%= error.message %>"
        })
    ))
    //проверка на наличие уже копированных картинок
    .pipe(app.plugins.newer(app.path.build.images))
    //конвертация в webp
    .pipe(
        app.plugins.if(
            app.isBuild,
            webp()
        ) 
    ) 
    //выгрузка webp в dist
    .pipe(
        app.plugins.if(
            app.isBuild,
            app.gulp.dest(app.path.build.images)
        ) 
    )
    //берем картинки из src
    .pipe(
        app.plugins.if(
            app.isBuild,
            app.gulp.src(app.path.src.images)
        ) 
    )
    //проверка на наличие уже копированных картинок
    .pipe(
        app.plugins.if(
            app.isBuild,
            app.plugins.newer(app.path.build.images)
        )
    )
    //минификация изображений 
    .pipe(
        app.plugins.if(
            app.isBuild,
            imagemin({
            iinterlaced: true,
            quality: 75,
            progressive: true,
            optimizationLevel: 5,
            svgoPlugins:[{removeViewBox: false},]
            }))
        )
    //выгрузка картинок в dist    
    .pipe(app.gulp.dest(app.path.build.images))
    //Поиск картинок svg в src
    .pipe(app.gulp.src(app.path.src.svg))
    //выгкрузка в dist
    .pipe(app.gulp.dest(app.path.build.images))
    //наблюдатель
    .pipe(app.plugins.browsersync.stream())
}