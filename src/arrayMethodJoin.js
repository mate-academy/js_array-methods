'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';

    for (const element of this) {
      if (element !== null && element !== undefined) {
        resultString += `${element}`;
      }

      if (element !== this[this.length - 1]) {
        resultString += `${separator}`;
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
