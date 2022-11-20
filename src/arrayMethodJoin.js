'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let res = '';

    for (const value of this) {
      if (value !== null && value !== undefined) {
        res += value;
      }

      if (this.indexOf(value) < this.length - 1) {
        res += separator;
      }
    }

    return res;
  };
}

module.exports = applyCustomJoin;
