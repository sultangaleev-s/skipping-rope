import gulp from "gulp"; //основной модуль
import { path } from "./gulp/config/path.js"; //импорт путей
import { plugins } from "./gulp/config/plugins.js"; //импорт плагинов
import { server } from "./gulp/tasks/server.js"; //сервер

global.app = {
    isBuild: process.argv.includes('--build'), //если хранит флаг build то продакшн, если нет то разработка
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins,
}

import { copy } from "./gulp/tasks/copy.js"; //импорт копирования
import { reset } from "./gulp/tasks/reset.js"; //удаление
import { html } from "./gulp/tasks/html.js"; //импорт html файла с операциями
import { scss } from "./gulp/tasks/scss.js"; //импорт css файла с операциями
import { js } from "./gulp/tasks/js.js"; //импорт js файла с операциями
import { images } from "./gulp/tasks/images.js"; //импорт js файла с операциями
import { otfToTtf, ttfToWoff, fontStyle } from "./gulp/tasks/fonts.js"; //шрифтов
import { svgSprive } from "./gulp/tasks/svgSprite.js"; //импорт js файла с операциями svg
import { zip } from "./gulp/tasks/zip.js" //импорт js файла с операциями 
import { ftp } from "./gulp/tasks/ftp.js" //импорт js файла с операциями 

const fonts = app.gulp.series(otfToTtf, ttfToWoff,fontStyle);

//наблюдатель за изменениями в файлах
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

export{ svgSprive }

const mainTasks = app.gulp.series(fonts, gulp.parallel(copy, html, scss, js, images))

//построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZip = gulp.series(reset, mainTasks, zip);
const deployFtp = gulp.series(reset, mainTasks, ftp);

export { dev };
export  { build };
export { deployZip };
export { deployFtp };

//выполнение по умолчанию
gulp.task('default', dev);