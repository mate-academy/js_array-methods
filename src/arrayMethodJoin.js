'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinToString = '';
    const arrayLength = this.length;

    if (!arrayLength) {
      return '';
    }

    for (let iteration = 0; iteration < arrayLength; iteration++) {
      if (this[iteration] === null || this[iteration] === undefined) {
        this[iteration] = '';
      }
      joinToString += this[iteration];

      if (iteration !== arrayLength - 1) {
        joinToString += separator;
      }
    }

    return joinToString;
  };
}

module.exports = applyCustomJoin;
