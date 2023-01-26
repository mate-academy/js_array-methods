'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    for (const arg of this) {
      if (arg !== null && arg !== undefined) {
        string += arg;
      }

      if (arg !== this[this.length - 1]) {
        string += separator;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
