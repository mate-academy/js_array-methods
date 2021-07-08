'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultStr = '';

    const arr = [];

    let k = 0;

    for (const word of this) {
      arr[k] = word;
      arr[k + 1] = separator;
      k += 2;
    }

    if (separator === null || separator === undefined || separator === '') {
      for (let i = 0; i < arr.length - 1; i++) {
        resultStr += arr[i];
      }
    }

    if (separator) {
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === null || arr[i] === undefined) {
          resultStr += '';
        } else {
          resultStr += arr[i];
        }
      }
    }

    return resultStr;
  };
}

module.exports = applyCustomJoin;
