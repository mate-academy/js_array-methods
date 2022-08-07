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
      if (typeof this[i] === 'undefined' || this[i] === null) {
        result += separator;
      } else {
        result += this[i];
        result += separator;
      }
    }

    if (typeof this[this.length - 1] !== 'undefined') {
      result += this[this.length - 1];
    }

    return result;
  };
}

module.exports = applyCustomJoin;
