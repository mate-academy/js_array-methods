'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let sep = separator;

    if (this.length === 0) {
      return result;
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (sep === undefined) {
        sep = ',';
      }

      if (this[i] === null || this[i] === undefined) {
        result += sep;
      } else {
        result += this[i];
        result += sep;
      }
    }

    if (this[this.length - 1] === undefined) {
      this[this.length - 1] = '';
    }

    result += this[this.length - 1];

    return result;
  };
}

module.exports = applyCustomJoin;
