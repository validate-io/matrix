'use strict';

var matrix = require( 'dstructs-matrix' ),
	isMatrix = require( './../lib' );

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
