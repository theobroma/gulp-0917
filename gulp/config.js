import posthtmlAttrsSorter from 'posthtml-attrs-sorter';
import errorHandler from './util/errorHandler';

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