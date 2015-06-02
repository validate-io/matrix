/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to create matrices:
	matrix = require( 'compute-ndarray' ),

	// Module to be tested:
	isMatrix = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-matrix', function tests() {

	it( 'should export a function', function test() {
		expect( isMatrix ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		assert.isTrue( isMatrix( matrix( [10,10] ) ) );
	});

	it( 'should negatively validate', function test() {
		var values = [
			5,
			'5',
			null,
			undefined,
			NaN,
			true,
			[],
			{},
			function ndarray(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.notOk( isMatrix( values[i] ), values[ i ] );
		}
	});

});
