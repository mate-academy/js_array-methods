'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let res = '';
    let el;

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        el = '';
      } else {
        el = this[i] + '';
      }

      if (i !== 0) {
        res += (separator + el);
      } else {
        res += el;
      }
    }

    return res;
  };
}

module.exports = applyCustomJoin;
