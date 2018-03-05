# putil-walkdir

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]
[![Dependencies][dependencies-image]][dependencies-url]
[![DevDependencies][devdependencies-image]][devdependencies-url]

Simple, fast directory walker


## Installation

  - `npm install putil-walkdir --save`

## Usage

`walkdir(dir, onFile, callback)`

**dir:** Directory to be start.

**callback:** Callback that will be called for every file.
    onFile = function(path, stats) 

**callback:** An optional callback to run once walk completed.

## Node Compatibility

  - node `>= 4.0`;
  
### License
[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/putil-walkdir.svg
[npm-url]: https://npmjs.org/package/putil-walkdir
[travis-image]: https://img.shields.io/travis/panates/putil-walkdir/master.svg
[travis-url]: https://travis-ci.org/panates/putil-walkdir
[coveralls-image]: https://img.shields.io/coveralls/panates/putil-walkdir/master.svg
[coveralls-url]: https://coveralls.io/r/panates/putil-walkdir
[downloads-image]: https://img.shields.io/npm/dm/putil-walkdir.svg
[downloads-url]: https://npmjs.org/package/putil-walkdir
[gitter-image]: https://badges.gitter.im/panates/putil-walkdir.svg
[gitter-url]: https://gitter.im/panates/putil-walkdir?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge
[dependencies-image]: https://david-dm.org/panates/putil-walkdir/status.svg
[dependencies-url]:https://david-dm.org/panates/putil-walkdir
[devdependencies-image]: https://david-dm.org/panates/putil-walkdir/dev-status.svg
[devdependencies-url]:https://david-dm.org/panates/putil-walkdir?type=dev
[quality-image]: http://npm.packagequality.com/shield/putil-walkdir.png
[quality-url]: http://packagequality.com/#?package=putil-walkdir
