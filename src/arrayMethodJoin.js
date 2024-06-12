'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (const i of this) {
      if (i === undefined || i === null) {
        result += separator;
      } else if (i === this[this.length - 1]) {
        result += i;
      } else {
        result += '' + i + separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
