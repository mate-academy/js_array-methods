'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const arrLength = this.length;

    for (let i = 0; i < arrLength; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        result += this[i];
      }

      if (i !== arrLength - 1) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
