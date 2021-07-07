'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultStr = '';

    if (separator === '') {
      for (const word of this) {
        resultStr += word;
      }
    }

    if (separator) {
      const arr = [];

      for (const word of this) {
        arr.push(word);
        arr.push(separator);
      }

      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === null || arr[i] === undefined) {
          resultStr += '';
        } else {
          resultStr += arr[i];
        }
      }
    }

    if (separator === null) {
      const arr = [];

      for (const word of this) {
        arr.push(word);
        arr.push(separator);
      }

      for (let i = 0; i < arr.length - 1; i++) {
        resultStr += arr[i];
      }
    }

    return resultStr;
  };
}

module.exports = applyCustomJoin;
