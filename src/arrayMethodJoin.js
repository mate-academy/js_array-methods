'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let res = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (i === 0) {
        res += this[i];
      } else {
        res += `${separator}${this[i]}`;
      }
    }

    return res;
  };
}

module.exports = applyCustomJoin;
