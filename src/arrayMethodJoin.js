'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const lastElement = this[this.length - 1];

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      result += this[i] + String(separator);
    }

    if (lastElement !== undefined) {
      result = result + lastElement;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
