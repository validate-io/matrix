'use strict';

// MODULES //

var typeName = require( 'type-name' );


// ISMATRIX //

/**
* FUNCTION: isMatrix( value )
*	Validates if a value is a matrix.
*
* @param {*} value - value to validate
* @returns {Boolean} boolean indicating if a value is a matrix
*/
function isMatrix( value ) {
	return typeName( value ) === 'Matrix';
} // end FUNCTION isMatrix()


// EXPORTS //

module.exports = isMatrix;
