'use strict';

var minify = require('html-minifier').minify;
var merge = require('merge');

exports.name = 'html-minifier';
exports.inputFormats = ['htmlmin', 'html-minifier'];
exports.outputFormat = 'html';

exports.render = function (str, options, locals) {
  return minify(str, merge(options, locals));
};
