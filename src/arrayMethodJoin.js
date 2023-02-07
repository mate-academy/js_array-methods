'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    if (this[this.length - 1] === undefined) {
      this[this.length - 1] = '';
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }
      result += this[i] + `${separator}`;
    }

    return result + this[this.length - 1];
  };
}

module.exports = applyCustomJoin;
