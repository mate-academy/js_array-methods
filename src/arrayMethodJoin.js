'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let res = '';

    if (this.length === 0) {
      return '';
    }

    for (const el of this) {
      if (el !== null && el !== undefined) {
        res += el;
      }

      if (this.indexOf(el, this.length - 1) !== this.length - 1) {
        res += separator;
      }
    }

    return res;
  };
}

module.exports = applyCustomJoin;
