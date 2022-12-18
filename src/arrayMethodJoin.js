'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';

    for (const item of this) {
      if (item !== null && item !== undefined) {
        resultString += item;
      }

      if (item !== this[this.length - 1]) {
        resultString += separator;
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
