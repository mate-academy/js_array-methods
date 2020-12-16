'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        if (i < this.length - 1) {
          str += `${this[i]}${separator}`;
        } else {
          str += `${this[i]}`;
        }
      } else {
        str += separator;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
