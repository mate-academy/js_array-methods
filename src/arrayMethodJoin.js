'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        str += `${this[i]}${separator}`;
      } else {
        str += `${separator}`;
      }
    }

    if (this[this.length - 1] !== undefined && this[this.length - 1] !== null) {
      str += `${this[this.length - 1]}`;
    }

    return str;
  };
}

module.exports = applyCustomJoin;
