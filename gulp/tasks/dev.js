import { series, parallel } from 'gulp';
import html from './html';

const dev = series(
  html
);

export default dev;
