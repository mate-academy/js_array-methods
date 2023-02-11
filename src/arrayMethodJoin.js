'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const arr = this;
    let result = '';

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== null && arr[i] !== undefined) {
        result += arr[i];
      }

      if (i + 1 < arr.length) {
        result += separator;
      }
    };

    return result;
  };
}

module.exports = applyCustomJoin;
