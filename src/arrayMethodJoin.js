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
      } else {
        result += '';
      }
      result += separator;
    }
    result += this[this.length - 1];

    return result;
  };
}

module.exports = applyCustomJoin;
