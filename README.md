# jstransformer-html-minifier

[HTMLMinifier](https://github.com/kangax/html-minifier) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-html-minifier/master.svg)](https://travis-ci.org/jstransformers/jstransformer-html-minifier)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-html-minifier/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-html-minifier?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-html-minifier/master.svg)](http://david-dm.org/jstransformers/jstransformer-html-minifier)
[![NPM version](https://img.shields.io/npm/v/jstransformer-html-minifier.svg)](https://www.npmjs.org/package/jstransformer-html-minifier)

## Installation

    npm install jstransformer-html-minifier

## API

```js
var htmlmin = require('jstransformer')(require('jstransformer-html-minifier'))

htmlmin.render('<p title="blah" id="moo">html-minifier</p>', {
  removeAttributeQuotes: true
}).body
//=> '<p title=blah id=moo>html-minifier</p>'
```

## License

MIT
