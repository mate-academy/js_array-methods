'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinToString = '';
    const arrayLength = this.length;

    if (!this.length) {
      return '';
    }

    for (let i = 0; i < arrayLength; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }
      joinToString += this[i];

      if (i !== arrayLength - 1) {
        joinToString += separator;
      }
    }

    return joinToString;
  };
}

module.exports = applyCustomJoin;
