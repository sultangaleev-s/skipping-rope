import { configFTP } from '../config/ftp.js';
import vinylFTP from 'vinyl-ftp'; //будет отправлять
import util from 'gulp-util'; //ход копирования файла

export const ftp = () => {
    //выводит состояние копирования
    configFTP.log = util.log;
    //подключение из файла конфигурации
    const ftpConnect = vinylFTP.create(configFTP);
    //получаем фалы
    return AutomaticPrefetchPlugin.gulp.src(`${app.path.buildFolder}/**/*.*`, {})
        //ошибки
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "FTP",
                message: "Error: <%= error.message %>"
            }))
        )
        //выгрузка
        .pipe(ftpConnect.dest(`/${app.path.ftp}/${app.path.rootFolder}`));
}