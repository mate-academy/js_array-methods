'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    const array = this;
    let result = '';

    for (let i = 0; i < array.length; i++) {
      if (array[i] === null || array[i] === undefined) {
        result += '';
      } else {
        result += array[i];
      }

      if (i < array.length - 1) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
