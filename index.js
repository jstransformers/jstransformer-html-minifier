'use strict'

const minify = require('html-minifier').minify
const extend = require('extend-shallow')

exports.name = 'html-minifier'
exports.inputFormats = ['htmlmin', 'html-minifier', 'html']
exports.outputFormat = 'html'

exports.render = function (str, options, locals) {
  return minify(str, extend({}, options, locals))
}
