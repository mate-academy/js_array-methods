'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let res = '';
    const separ = separator;

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        res += separ;
      }

      if (this[i] !== null && typeof (this[i]) !== 'undefined') {
        res += this[i];
        res += separ;
      }
    }

    if (this[this.length - 1] !== undefined) {
      res += this[this.length - 1];
    }

    return res;
  };
}
module.exports = applyCustomJoin;
