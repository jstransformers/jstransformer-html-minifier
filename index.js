'use strict';

var minify = require('html-minifier').minify;
var extend = require('extend-shallow');

exports.name = 'html-minifier';
exports.inputFormats = ['htmlmin', 'html-minifier', 'html'];
exports.outputFormat = 'html';

exports.render = function (str, options, locals) {
  return minify(str, extend({}, options, locals));
};
