'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let res = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        res += separator;
      } else if (this[i] !== this[this.length - 1]) {
        res = res + this[i] + separator;
      } else {
        res += this[i];
      }
    }

    return res;
  };
}

module.exports = applyCustomJoin;
