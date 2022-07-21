'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // Join method realization by Oleksii K.
    let joinedRes = '';
    let sep = separator;
    
    // if not a String converting separator to String Object
    sep = String(sep);

    for (const elem of this) {
      // check if it is a last array element don't add a separator
      if (elem === this[this.length - 1]) {
        sep = '';
      }

      // if elem has type undefined, null or empty array []
      // then elem is empty string otherwise convert all elements to String
      if (elem === undefined || elem === null || elem === []) {
        joinedRes += '' + sep;
      } else {
        joinedRes += String(elem) + sep;
      }
    }

    return joinedRes;
  };
}

module.exports = applyCustomJoin;
