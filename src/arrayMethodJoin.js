'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';

    if (this.length === 0) {
      return resultString;
    }

    // const newSeparator = (separator || '');
    const newSeparator = separator === undefined ? ',' : separator + '';

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        resultString += newSeparator;
      } else {
        resultString += this[i] + newSeparator;
      }
    }
    resultString += this[this.length - 1];
    return resultString;
  };
}

module.exports = applyCustomJoin;
