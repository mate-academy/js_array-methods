'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (const element of this) {
      result += element !== undefined && element !== null
        ? element
        : '';

      if (element === this[this.length - 1]) {
        continue;
      } else {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
