'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here

    let resultString = '';

    if (this.length === 0) {
      return resultString;
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        resultString += separator;
        continue;
      }
      resultString += this[i] + String(separator);
    }

    return resultString + this[this.length - 1];
  };
}

module.exports = applyCustomJoin;
