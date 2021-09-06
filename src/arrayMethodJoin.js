'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const arr = [...this];
    let result = '';

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === undefined || arr[i] === null) {
        arr[i] = '';
      }

      if (i === arr.length - 1) {
        result += arr[i].toString();
      } else {
        result += arr[i].toString();
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
