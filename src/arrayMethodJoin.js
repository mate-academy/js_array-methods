'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let res = '';

    for (const el of this) {
      res += el === null || el === undefined
        ? '' : el;

      if (el !== this[this.length - 1]) {
        res += separator;
      }
    }

    return res;
  };
}

module.exports = applyCustomJoin;
