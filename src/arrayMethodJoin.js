'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    for (const one of this) {
      if (one === this[this.length - 1]) {
        if (one === undefined) {
          continue;
        }

        str += one;
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
