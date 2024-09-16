'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let res = '';

    for (let i = 0; i < this.length; i++) {
      const el = this[i];

      if (el !== null && el !== undefined) {
        res += el;
      }

      if (i !== this.length - 1) {
        res += separator;
      }
    }

    return res;
  };
}

module.exports = applyCustomJoin;
