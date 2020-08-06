'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let altSeparator = separator;

    if (separator === undefined) {
      altSeparator = ',';
    }

    let resultString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        resultString += '';
      } else {
        resultString += this[i];
      }

      if (i < this.length - 1) {
        resultString += altSeparator;
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
