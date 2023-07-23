'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const arrayLength = this.length;
    let result = '';

    for (let i = 0; i < arrayLength; i++) {
      if (this[i] === null || this[i] === undefined) {
        result += '';
      } else {
        result += this[i];
      }

      if (i !== arrayLength - 1) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
