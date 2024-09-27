'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    let str = '';
    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === undefined || this[i] === null) {
        str += separator;
      } else {
        str += `${this[i]}${separator}`;
      }
    }
    str += this[this.length - 1];
    return str;
  };
}

module.exports = applyCustomJoin;
