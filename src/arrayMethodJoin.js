'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        resultString += this[i];
      } else if (this[i] === null || this[i] === undefined) {
        resultString += separator;
      } else if (separator === null) {
        resultString += this[i] + 'null';
      } else {
        resultString += this[i] + separator;
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
