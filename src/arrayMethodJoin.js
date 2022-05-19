'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let out = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }
      out += this[i];

      if (i < this.length - 1) {
        out += separator;
      }
    }

    return out;
  };
}

module.exports = applyCustomJoin;
