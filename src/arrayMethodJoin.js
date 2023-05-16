'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (!this.length) {
      return '';
    }

    let result = '';
    const thisLength = this.length;
    const separatorString = separator + '';

    for (let i = 0; i < thisLength - 1; i++) {
      if (this[i] === undefined || this[i] === null) {
        result += separatorString;
      } else {
        result += this[i] + separatorString;
      }
    }

    return this[thisLength - 1] === undefined
      ? result
      : result + this[thisLength - 1];
  };
}

module.exports = applyCustomJoin;
