/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to create matrices:
	matrix = require( 'dstructs-matrix' ),

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
			{
				'data': new Int8Array( 10 ),
				'shape': [5,2],
				'strides': [2,1],
				'dtype': 'int8',
				'length': 10
			},
			function matrix(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.isFalse( isMatrix( values[i] ), values[ i ] );
		}
	});

});
