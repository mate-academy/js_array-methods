'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let str = '';
    let separ = separator;

    if (this.length === 0) {
      return '';
    }

    if (separator === undefined) {
      separ = ',';
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }
      str += `${this[i]}${separ}`;
    }

    str += this[this.length - 1];

    return str;
  };
}

module.exports = applyCustomJoin;
