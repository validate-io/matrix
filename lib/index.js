'use strict';

// MODULES //

var typeName = require( 'type-name' );


// ISMATRIX //

/**
* FUNCTION: isMatrix( value )
*	Validates if a value is a Matrix.
*
* @param {*} value - value to validate
* @returns {Boolean} boolean indicating if a value is a Matrix
*/
function isMatrix( value ) {
	return typeName( value ) === 'Matrix';
} // end FUNCTION isMatrix()


// EXPORTS //

module.exports = isMatrix;
