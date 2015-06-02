'use strict';

// MODULES //

var matrix = require( 'compute-matrix' ),
	isMatrixLike = require( 'validate.io-matrix-like' ),
	isMatrix = require( './../lib' );


// VARIABLES //

var start,
	stop,
	len,
	res,
	mat,
	b,
	i;


// --------------------------------------
// WARM-UP

len = 1e6;
for ( i = 0; i < len; i++ ) {
	i = i;
}


// --------------------------------------
// BENCHMARK

len = 1e6;
res = new Array( 1 );

mat = matrix( [10,10] );

// Matrix-like check:
start = process.hrtime();
for ( i = 0; i < len; i++ ) {
	b = isMatrixLike( mat );
}
stop = process.hrtime( start );

res[ 0 ] = stop[ 0 ] + stop[ 1 ]*1e-9;

// Matrix check:
start = process.hrtime();
for ( i = 0; i < len; i++ ) {
	b = isMatrix( mat );
}
stop = process.hrtime( start );

res[ 1 ] = stop[ 0 ] + stop[ 1 ]*1e-9;


// --------------------------------------
// RESULTS

console.log( 'matrix-like:\t%d ops/sec', Math.floor( len/res[ 0 ] ) );
console.log( 'matrix:\t%d ops/sec', Math.floor( len/res[ 1 ] ) );
console.log( '\n' );

