'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (typeof this[i] !== 'object' && typeof this[i] !== 'undefined') {
        result += `${this[i]}`;
      }

      if (i !== this.length - 1) {
        result += `${separator}`;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
