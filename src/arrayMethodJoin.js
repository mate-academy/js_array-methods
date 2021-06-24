'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedArray = '';

    if (!this) {
      return '';
    }

    for (const char of this) {
      if (char !== null && char !== undefined) {
        joinedArray += char;
      }

      if (char !== this[this.length - 1]) {
        joinedArray += separator;
      }
    }

    return joinedArray;
  };
}

module.exports = applyCustomJoin;
