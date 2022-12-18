'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const array = this;
    let resultString = '';

    for (const item of array) {
      if (item === null || item === undefined) { } else {
        resultString += item;
      }

      if (item !== array[array.length - 1]) {
        resultString += separator;
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
