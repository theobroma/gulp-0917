import gulp from 'gulp';
import plumber from 'gulp-plumber';
import pug from 'gulp-pug';
import notify from 'gulp-notify';
import posthtml from 'gulp-posthtml';
import prettify from 'gulp-prettify';
import getJsonData from '../util/getJsonData';
import {
  plumberConfig,
  posthtmlConfig,
  htmlPrettifyConfig
} from '../config';

export const pages = () => {
  const pugConfig = {
    locals: getJsonData('./tmp/data.json')
  };

  return gulp.src([ '**/*.pug', '!**/_*.pug' ], { cwd: 'source/pages' })
    .pipe(plumber(plumberConfig))
    .pipe(pug(pugConfig))
    .pipe(posthtml(posthtmlConfig.plugins, posthtmlConfig.options))
    .pipe(prettify(htmlPrettifyConfig))
    .pipe(gulp.dest('dest'))
    .pipe(notify("Pug Compiled"));
};

const html =
  gulp.series(
    pages
  );

export default html;
