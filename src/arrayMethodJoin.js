'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (!this.length) {
      return '';
    }

    let resultString = '';
    const separatorStr = String(separator);

    for (let i = 0; i < this.length - 1; i += 1) {
      if (this[i] === null || this[i] === undefined) {
        resultString += separator;
      } else if (separator === null) {
        resultString += this[i] + separatorStr;
      } else {
        resultString += this[i] + separator;
      }
    }

    return resultString + this[this.length - 1];
  };
}

module.exports = applyCustomJoin;
