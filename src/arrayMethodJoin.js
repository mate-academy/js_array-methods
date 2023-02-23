'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    const arr = this;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== undefined && arr[i] !== null) {
        result += arr[i];
      } else {
        result += '';
      }

      if (i !== arr.length - 1) {
        if (separator === undefined) {
          result += ',';
        } else {
          result += separator;
        }
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
