//импорт основного модуля
import gulp from "gulp";

//импорт объекта путей
import { path } from "./gulp/config/path.js";

//импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";

//глобальный объект для общих сущностей
global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins,
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build')
};

//импорт сценариев
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { svgSprive } from "./gulp/tasks/svgSprite.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";

//функция для сбора наблюдателей
function watcher() {
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
}
//константа для подключения шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

//константа для основных сценариев
const mainTasks = gulp.series(fonts, gulp.parallel(html, scss, js, images));

//константа для создания zip архива
const deployZIP = gulp.series(reset, mainTasks, zip);

//константа для отправки на FTP сервер
const deployFTP = gulp.series(reset, mainTasks, ftp);

//cложный сценарий (dev - разработка)
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);

//вызов сценария ('default' - по умолчанию)
gulp.task("default", dev);

//экспорт функций для вызова отдельно
export { svgSprive };
export { dev };
export { build };
export { deployZIP };
export { deployFTP };