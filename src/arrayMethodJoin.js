'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const separatorString = String(separator);
    const lastElement = this[this.length - 1];
    let result = '';

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === undefined || this[i] === null) {
        result += separatorString;
      } else {
        result += this[i] + separatorString;
      }
    }

    if (lastElement !== undefined) {
      result += lastElement;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
