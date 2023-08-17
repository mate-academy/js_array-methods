'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let separ = separator;

    if (separ === undefined) {
      separ = ',';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        result += separ;
      } else if (i !== this.length - 1) {
        result += `${this[i]}${separ}`;
      } else {
        result += `${this[i]}`;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
