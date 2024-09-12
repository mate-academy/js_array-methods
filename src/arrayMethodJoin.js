'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let string = '';
    if (this.length === 0) {
      return string;
    };
      for (let i = 0; this.length >= i; i++) {
        if (this[i] != null || undefined) {
      string += `${this[i]}`;
        };
      if (i === this.length - 1) {
          break
      };
      string += `${separator}`;
    }
    return string;
    };
  }

module.exports = applyCustomJoin;
