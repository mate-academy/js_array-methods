'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const arrayLength = this.length;
    let resultString = '';

    for (let i = 0; i < arrayLength; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        resultString += this[i];
      }

      if (i !== arrayLength - 1) {
        resultString += separator;
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
