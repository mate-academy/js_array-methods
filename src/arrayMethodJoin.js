'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedValues = '';

    if (!this) {
      return '';
    }

    for (const char of this) {
      if (char !== null && char !== undefined) {
        joinedValues += char;
      }

      if (char !== this[this.length - 1]) {
        joinedValues += separator;
      }
    }

    return joinedValues;
  };
}

module.exports = applyCustomJoin;
