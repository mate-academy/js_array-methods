'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let joined = '';

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        joined += `${this[i]}${separator}`;
      } else {
        joined += separator;
      }
    }

    return joined + this[this.length - 1];
  };
}

module.exports = applyCustomJoin;
