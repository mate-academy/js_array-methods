'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let resultString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        resultString += this[i];
      }

      if (i + 1 !== this.length) {
        resultString += separator;
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
