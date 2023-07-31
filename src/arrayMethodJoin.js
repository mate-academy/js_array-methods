'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let result = '';
    let resultSeparator = '';
    const endIndex = (this.length - 1);

    if (separator === undefined) {
      resultSeparator = ',';
    } else if (separator === null) {
      resultSeparator = 'null';
    } else {
      resultSeparator = separator;
    }

    if (this.length === 0) {
      return result;
    }

    for (let i = 0; i < endIndex; i++) {
      if (this[i] === null || this[i] === undefined) {
        result += resultSeparator;
      } else {
        result += this[i] + resultSeparator;
      }
    }
    result += this[endIndex];
    return result;
  };
}

module.exports = applyCustomJoin;
