'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let res = '';
    let sep = separator;

    if (separator === null) {
      sep = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (i < this.length - 1) {
        res += this[i] + sep;
      }

      if (i === this.length - 1) {
        res += this[i];
      }
    }

    return res;
  };
}

module.exports = applyCustomJoin;
