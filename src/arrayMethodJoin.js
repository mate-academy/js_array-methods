'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let resultStr = '';
    const newSeparator = separator === undefined ? ',' : separator + '';

    if (this.length === 0) {
      return resultStr;
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        resultStr += newSeparator;
      } else {
        resultStr += this[i] + newSeparator;
      }
    }
    resultStr += this[this.length - 1];

    return resultStr;
  };
}

module.exports = applyCustomJoin;
