'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    let resultString = '';

    for (let i = 0; i < this.length - 1; i += 1) {
      if (this[i] === null || this[i] === undefined) {
        resultString += separator;
      } else if (separator === null) {
        resultString += this[i] + String(separator);
      } else {
        resultString += this[i] + separator;
      }
    }

    return resultString + this[this.length - 1];
  };
}

module.exports = applyCustomJoin;
