'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let output = '';
    const arrayLength = this.length;

    for (let n = 0; n < arrayLength; n++) {
      const currentElement = this[n];

      if (currentElement !== null && typeof currentElement !== 'undefined') {
        output += currentElement;
      }

      if (n !== arrayLength - 1) {
        output += separator;
      }
    } // fixes applied

    return output;
  };
}

module.exports = applyCustomJoin;
