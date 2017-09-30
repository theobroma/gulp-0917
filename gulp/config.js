import path from 'path';
const CWD = process.cwd();

import posthtmlAttrsSorter from 'posthtml-attrs-sorter';
import errorHandler from './util/errorHandler';
import stylusFileExists from './util/stylusFileExists';
import rupture from 'rupture';

export const plumberConfig = {
  errorHandler
};

export const posthtmlConfig = {
  plugins: [
    posthtmlAttrsSorter({
      order: [
        'class',
        'id',
        'name',
        'data',
        'ng',
        'src',
        'for',
        'type',
        'href',
        'values',
        'title',
        'alt',
        'role',
        'aria'
      ]
    })
  ],
  options: {}
};

export const htmlPrettifyConfig = {
  'unformatted': [ 'pre', 'code', 'textarea' ],
  indent_char: ' ',
  indent_size: 2,
  'preserve_newlines': true,
  'brace_style': 'expand',
  'end_with_newline': true
};

export const browserSyncConfig = {
  server: './dest',
  notify: false,
  reloadOnRestart: true,
  snippetOptions: {
    rule: {
      match: /<\/body>/i
    }
  }
};

export const delConfig = [
  'dest',
  'tmp'
];

// https://github.com/jescalan/accord/blob/master/docs/stylus.md
export const stylusConfig = {
  use: [
    rupture(),
    stylusFileExists()
  ],
  include: [
    path.join(CWD, 'node_modules')
  ],
  'include css': true
};
