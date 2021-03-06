import gulp from 'gulp';
import { reload } from './server';
import { pages, html } from './html';
import css from './css';
/*import scripts from './scripts';
import icons from './icons';
import sprite from './sprite';
import moduleImages from './moduleImages';
import { assets, staticFiles } from './assets';*/

const watch = () => {

  // Modules, pages
  gulp.watch(
    'source/**/*.pug',
    gulp.series(pages, reload)
  );

  // Modules data
  gulp.watch(
    'source/modules/*/data/*.yml',
    gulp.series(html, reload)
  );

    // Static styles
  gulp.watch(
    'source/static/styles/**/*.styl',
    gulp.series(css)
  );

  // Modules styles
  gulp.watch(
    'source/modules/**/*.styl',
    gulp.series(css)
  );
  
};

export default watch;
