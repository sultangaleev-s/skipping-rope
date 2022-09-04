import { deleteAsync } from "del";
import zipPlugin from "gulp-zip";


export const zip = () => {
    //удаляем предыдущий архив
    deleteAsync(`./${app.path.rootFolder}.zip`);
    //ищем фаилы 
    return app.gulp.src(`${app.path.buildFolder}/**/*.*`, {})
    //сообщение об ошибке
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "ZIP",
            message: "Error: <%= error.message %>"
        })
    ))
    //архивирование
    .pipe(zipPlugin(`${app.path.rootFolder}.zip`))
    //выгрузка
    .pipe(app.gulp.dest('./'));
}