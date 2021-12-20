'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    if (this.length === 0) {
      return '';
    }

    let sep = separator;
    const lastIndex = this.length - 1;

    if (sep === undefined) {
      sep = ',';
    }

    let result = '';

    for (let i = 0; i < lastIndex; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        result += this[i];
      }
      result += sep;
    }

    if (this[lastIndex] !== null && this[lastIndex] !== undefined) {
      result += this[lastIndex];
    }

    return result;
  };
}

module.exports = applyCustomJoin;
