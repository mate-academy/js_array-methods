'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length - 1; ++i) {
      if (this[i] != null) {
        result += `${this[i]}`;
      }

      result += `${separator}`;
    }

    if (this.length > 0 && this[this.length - 1] != null) {
      result += `${this[this.length - 1]}`;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
