'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let result = '';

    for (let i = 0; i < this.length; i++) {
      const current = this[i] === null || this[i] === undefined ? '' : this[i];

      result += current;

      if (i < this.length - 1) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
