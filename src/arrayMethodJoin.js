'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let result = '';

    if (this.length === 0) {
      return '';
    }

    if (this[this.length - 1] === undefined) {
      this[this.length - 1] = '';
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (separator !== undefined) {
        result += this[i] + `${separator}`;
      } else {
        result += this[i] + ',';
      }
    }

    return result + this[this.length - 1];
  };
}

module.exports = applyCustomJoin;
