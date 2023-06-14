'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';
    const ARRAY_LENGTH = this.length - 1;

    for (let i = 0; i <= ARRAY_LENGTH; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        resultString += this[i];
      }

      if (i < ARRAY_LENGTH) {
        resultString += separator;
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
