'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  // eslint-disable-next-line space-before-function-paren
  [].__proto__.join2 = function (separator = ',') {
    // write code here

    let res = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (separator === null) {
        res += i <= this.length - 2 ? String(this[i]) + separator : this[i];
      } else {
        res += i <= this.length - 2 ? this[i] + separator : this[i];
      }
    }

    return res;
  };
}

module.exports = applyCustomJoin;
