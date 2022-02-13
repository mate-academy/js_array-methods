'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const sep = String(separator);
    let res = '';

    if (this.length === 1) {
      return String(this[0]);
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        res += `${this[i]}`;
      }

      if (i < this.length - 1) {
        res += sep;
      }
    }

    return res;
  };
}

module.exports = applyCustomJoin;
