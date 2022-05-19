'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    let separ = separator;

    if (separator === null) {
      separ = 'null';
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === undefined || this[i] === null) {
        result += separ;
      } else {
        result += this[i] + separ;
      }
    }

    if (this[this.length - 1] !== null
      && this[this.length - 1] !== undefined) {
      result += this[this.length - 1];
    }

    return result;
  };
}

module.exports = applyCustomJoin;
