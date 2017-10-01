import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import stylus from 'gulp-stylus';
import combineMq from 'gulp-combine-mq';
import postcss from 'gulp-postcss';
import { plumberConfig, stylusConfig } from '../config';
import bs from '../util/getBrowserSyncInstance';


const css = () =>
  gulp.src([ '*.css', '!_*.css.js' ], { cwd: 'source/static/styles' })
    .pipe(plumber(plumberConfig))
    .pipe(combineMq({ beautify: true }))
    .pipe(postcss())
    .pipe(gulp.dest('dest/assets/stylesheets'))
    .pipe(notify("Styles Compiled"))
    .pipe(bs.reload({ stream: true }));

export default css;
