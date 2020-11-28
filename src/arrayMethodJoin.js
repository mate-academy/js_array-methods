'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    const newSeparator = separator + '';

    if (this.length === 0) {
      return result;
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        result += newSeparator;
        continue;
      }
      result += this[i] + newSeparator;
    }

    return result + this[this.length - 1];
  };
}

module.exports = applyCustomJoin;
