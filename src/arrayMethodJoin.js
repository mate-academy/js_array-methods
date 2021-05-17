'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here

    let result = '';

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        result += this[i];
      }

      if (i !== this.length - 1) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
