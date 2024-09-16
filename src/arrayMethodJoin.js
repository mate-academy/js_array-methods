'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let result = '';

    for (const item of this) {
      if (item === undefined || item === null) {
        result += ',';
      } else {
        result += item + String(separator);
      }
    }

    return result.slice(0, result.lastIndexOf(separator));
  };
}

module.exports = applyCustomJoin;
