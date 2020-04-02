'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (const index of this) {
      if (index === this[this.length - 1]) {
        result += index;

        return result;
      }

      if (index === null || index === undefined) {
        result += separator;
      } else {
        result += '' + index + separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
