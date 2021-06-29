'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    for (const key of this) {
      if (key !== undefined && key !== null) {
        str += key;
      };

      if (key !== this[this.length - 1]) {
        str += separator;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
