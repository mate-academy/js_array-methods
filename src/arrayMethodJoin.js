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

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        if (i === this.length - 1) {
          str += this[i];
        } else {
          str += this[i] + `${separator}`;
        }
      } else {
        str += `${separator}`;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
