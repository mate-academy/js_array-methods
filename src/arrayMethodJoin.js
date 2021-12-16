'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        str += this[i];
      }

      str += separator;
    }

    const lastIndex = this.length - 1;

    if (this[lastIndex] !== null && this[lastIndex] !== undefined) {
      str += this[lastIndex];
    }

    return str;
  };
}

module.exports = applyCustomJoin;
