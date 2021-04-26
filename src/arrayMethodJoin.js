'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const arr = [...this];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === null || arr[i] === undefined) {
        arr[i] = '';
      }

      if (i !== arr.length - 1) {
        result = result + arr[i] + separator;
      } else {
        result += arr[i];
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
