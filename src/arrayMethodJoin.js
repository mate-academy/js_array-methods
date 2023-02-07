'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let separ = separator;
    let str = '';

    if (separ === undefined) {
      separ = ',';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (i === this.length - 1) {
        str += this[i];
      } else {
        str += `${this[i]}${separ}`;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
