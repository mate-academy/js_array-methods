'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function (separator = ',') {
    // write code here
    let joinMethod = '';

    for (let idx = 0; idx < this.length; idx++) {
      if (this[idx] !== undefined && this[idx] !== null) {
        joinMethod += this[idx];
      }

      if (idx !== this.length - 1) {
        joinMethod += separator;
      }
    }

    return joinMethod;
  };
}

module.exports = applyCustomJoin;
