'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (const [idx, el] of this.entries()) {
      if (el !== null && el !== undefined) {
        result += el;
      }

      if (idx < this.length - 1) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
