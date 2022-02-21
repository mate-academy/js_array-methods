'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let internalSeparator;
    let resultString = '';

    if (separator === undefined) {
      internalSeparator = ',';
    } else {
      internalSeparator = separator;
    }

    for (let i = 0; i < this.length; i++) {
      if (i > 0) {
        resultString += internalSeparator;
      }

      if (this[i] === undefined || this[i] === null) {
        resultString += '';
      } else {
        resultString += this[i].toString();
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
