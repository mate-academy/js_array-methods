'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let str = '';

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        str += String(separator);
      } else {
        str += this[i] + String(separator);
      }
    }

    return str + this[this.length - 1];
  };
}

module.exports = applyCustomJoin;
