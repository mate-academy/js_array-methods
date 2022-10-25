'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let joined = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (i !== this.length - 1) {
        joined += `${this[i]}${separator}`;
      } else {
        joined += `${this[i]}`;
      }
    }

    return joined;
  };
}

module.exports = applyCustomJoin;
