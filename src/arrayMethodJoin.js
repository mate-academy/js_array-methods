'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const lastElement = this[this.length - 1];
    let resultString = '';

    for (const element of this) {
      if (element !== undefined && element !== null && element !== []) {
        resultString += element;
      }

      if (element !== lastElement) {
        resultString += separator;
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
