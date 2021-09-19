'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        resultString += '';
      } else {
        resultString += this[i];
      }

      resultString += separator;
    }

    resultString += this[this.length - 1];

    return resultString;
  };
}

module.exports = applyCustomJoin;
