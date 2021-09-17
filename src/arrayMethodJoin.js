'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const arrLength = this.length;
    let result = '';

    if (arrLength === 0) {
      return '';
    }

    for (let i = 0; i < arrLength; i++) {
      if (this[i] === null || this[i] === undefined) {
        result += '';
      } else {
        result += this[i];
      }

      if (i < arrLength - 1) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
