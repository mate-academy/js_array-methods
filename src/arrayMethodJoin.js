'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let count = 0;
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null
        && this[i] !== undefined) {
        result += this[i];
      }

      if (count !== this.length - 1) {
        result += separator;
      }

      count++;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
