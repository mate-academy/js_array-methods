'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    for (const item of this) {
      if (item === null || item === undefined) {
        string += separator;
        continue;
      }

      string += item;

      if (this.lastIndexOf(item) !== this.length - 1) {
        string += separator;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
