'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    if (this.length === 0) {
      return '';
    }

    let sep = '';
    if (separator === undefined) {
      sep = ',';
    } else {
      sep = separator;
    }

    let resultString = '';
    const lastIndex = this.length - 1;
    for (let i = 0; i < lastIndex; i++) {
      if (this[i] === null || this[i] === undefined) {
        resultString = resultString + sep;
      } else {
        resultString = resultString + this[i] + sep;
      }
    }

    resultString += this[lastIndex];
    return resultString;
  };
}

module.exports = applyCustomJoin;
