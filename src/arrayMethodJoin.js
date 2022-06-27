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

    if (typeof this[0] === 'object' || typeof this[0] === 'undefined') {
    } else {
      result = String(this[0]);
    }

    if (this.length === 1) {
      return result;
    }

    for (let i = 1; i < this.length; i++) {
      if (typeof this[i] === 'object' || typeof this[i] === 'undefined') {
        result += separator;
      } else {
        result += `${separator}${this[i]}`;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
