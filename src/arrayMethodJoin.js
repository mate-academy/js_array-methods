'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    if (!this.length) {
      return '';
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        result += this[i];
      }
      result += separator;
    }

    if (this[this.length - 1] !== null && this[this.length - 1] !== undefined) {
      result += this[this.length - 1];
    }

    return result;
  };
}

module.exports = applyCustomJoin;
