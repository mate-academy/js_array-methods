'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let val of this) {
      if (val === null || val === undefined) {
        val = '';
      }
      result += `${val}${separator}`;
    }

    if (separator === '') {
      return result;
    }

    return result.slice(0, result.lastIndexOf(separator));
  };
}

module.exports = applyCustomJoin;
