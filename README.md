Matrix
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value is a [Matrix](https://github.com/compute-io/matrix).


## Installation

``` bash
$ npm install validate.io-matrix
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var isMatrix = require( 'validate.io-matrix' );
```

#### isMatrix( value )

Validates if a value is a [Matrix](https://github.com/compute-io/matrix).

``` javascript
var matrix = require( 'compute-matrix' );

var mat = matrix( [10,10] );

var bool = isMatrix( mat );
// returns true
```


## Examples

``` javascript
var matrix = require( 'compute-matrix' ),
	isMatrix = require( 'validate.io-matrix' );

var mat = matrix( [10,10] );

console.log( isMatrix( mat ) );
// returns true

console.log( isMatrix( [] ) );
// returns false

console.log( isMatrix( {} ) );
// returns false

console.log( isMatrix({
	'data': new Int8Array( 10 ),
	'shape': [5,2],
	'strides': [2,1],
	'dtype': 'int8',
	'length': 10
}));
// returns false

console.log( isMatrix( null ) );
// returns false
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/validate.io-matrix.svg
[npm-url]: https://npmjs.org/package/validate.io-matrix

[travis-image]: http://img.shields.io/travis/validate-io/matrix/master.svg
[travis-url]: https://travis-ci.org/validate-io/matrix

[coveralls-image]: https://img.shields.io/coveralls/validate-io/matrix/master.svg
[coveralls-url]: https://coveralls.io/r/validate-io/matrix?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/matrix.svg
[dependencies-url]: https://david-dm.org/validate-io/matrix

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/matrix.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/matrix

[github-issues-image]: http://img.shields.io/github/issues/validate-io/matrix.svg
[github-issues-url]: https://github.com/validate-io/matrix/issues
