'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (const element of this) {
      if (element === null || element === undefined) {
        result += `${separator}`;
        continue;
      }

      if (element === this[this.length - 1]) {
        result += element;
        continue;
      }

      result += element + `${separator}`;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
