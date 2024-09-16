'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';

    let index = 0;

    for (const value of this) {
      if (value !== null && value !== undefined) {
        resultString += value;
      }

      if (index !== this.length - 1) {
        resultString += separator;
      }
      index++;
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
