'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    if (this.length === 1) {
      return this[0] + '';
    }

    let res = '';

    res = this[0] == null || undefined ? '' : this[0];

    for (let i = 1; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        res = `${res}${separator}${this[i]}`;
      } else {
        res = `${res}${separator}`;
      }
    }

    return res;
  };
}

module.exports = applyCustomJoin;
