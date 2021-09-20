'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let res = '';

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        res += '';
      } else {
        res += this[i];
      }
      res += separator;
    }

    res += this[this.length - 1];

    return res;
  };
}

module.exports = applyCustomJoin;
