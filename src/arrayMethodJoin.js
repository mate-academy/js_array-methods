'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';
    let symbolToAdd = '';

    for (let i = 0; i < this.length; i++) {
      symbolToAdd = `${this[i]}`;

      if (this[i] === null || this[i] === undefined) {
        symbolToAdd = '';
      }

      if (i < this.length - 1) {
        resultString += symbolToAdd + separator;
      } else {
        resultString += symbolToAdd;
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
