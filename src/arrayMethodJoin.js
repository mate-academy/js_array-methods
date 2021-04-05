'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let res = '';

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || typeof this[i] === 'undefined') {
        this[i] = '';
      }

      if (separator === null) {
        res += this[i] + 'null';
      }

      if (typeof separator === 'undefined') {
        res += this[i] + ',';
      }

      if (typeof separator !== 'undefined' && separator !== null) {
        res += this[i] + separator;
      }
    }

    res += this[this.length - 1];

    return res;
  };
}

module.exports = applyCustomJoin;
