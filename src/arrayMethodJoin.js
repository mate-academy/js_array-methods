'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    for (const el of this) {
      if (el !== null && el !== undefined) {
        str += el;
      }

      if (el !== this[this.length - 1]) {
        str += separator;
      }
    }

    return str;
  };
};

module.exports = applyCustomJoin;
