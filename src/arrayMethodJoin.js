'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    let result = '';

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        result += this[i];
      }

      if (i < this.length - 1) {
        result += separator;
      }
    }

    if (this[this.length - 1]) {
      result += this[this.length - 1];
    }

    return result;
  };
}

module.exports = applyCustomJoin;
