'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const lastChar = this.length - 1;

    let result = '';

    for (let i = 0; i < this.length; i++) {
      const current = this[i];

      if (current !== undefined && current !== null) {
        result += current;
      }

      if (i !== lastChar) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
