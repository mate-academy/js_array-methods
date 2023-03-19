'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    for (const one of this) {
      if (one === this[this.length - 1]) {
        str += one !== undefined && one !== null ? one : '';
        continue;
      } else {
        str += one !== undefined && one !== null ? one : '';
        str += separator;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
