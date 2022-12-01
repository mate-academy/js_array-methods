'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const separatorAsString = String(separator);
    const lastItem = this[this.length - 1];
    let result = '';

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        result += separatorAsString;
      } else {
        result += this[i] + separatorAsString;
      }
    }

    if (lastItem !== undefined) {
      result += lastItem;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
