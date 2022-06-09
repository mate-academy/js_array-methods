'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let sep;
    let str = '';

    if (separator === undefined) {
      sep = ',';
    } else {
      sep = separator + '';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (i === this.length - 1) {
        str += this[i];
      } else {
        str += this[i] + sep;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
