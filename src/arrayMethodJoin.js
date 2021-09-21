'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    for (const item of this) {
      if (item === this[this.length - 1]) {
        string += `${item}`;
        continue;
      }

      if (item === null || item === undefined) {
        string += `${separator}`;
      } else {
        string += `${item}${separator}`;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
