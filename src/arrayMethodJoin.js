'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultStr = '';

    const arr = [];

    for (const word of this) {
      arr.push(word);
      arr.push(separator);
    }

    if (separator === null || separator === undefined) {
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

    if (separator === '') {
      for (const word of this) {
        resultStr += word;
      }
    }

    return resultStr;
  };
}

module.exports = applyCustomJoin;
