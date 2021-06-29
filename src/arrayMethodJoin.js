'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    for (const item of this) {
      if (item !== undefined && item !== null) {
        str += item;
      }

      if (item !== this[this.length - 1]) {
        str += separator;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
