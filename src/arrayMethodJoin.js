'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    } else if (this.length === 1) {
      return `${this[0]}`;
    }

    let result = '';
    let b = 0;

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        result += this[i];
      }
      b++;

      if (b === this.length) {
        break;
      }

      result += separator;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
