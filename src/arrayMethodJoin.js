'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    let separ = separator;

    if (this.length === 0) {
      return result;
    }

    // define separator
    if (separator === undefined) {
      separ = ',';
    }

    if (separator === null) {
      separ = 'null';
    }

    // define first element
    if (this[0] !== null && this[0] !== undefined) {
      result += this[0];
    }

    // main magic
    for (let i = 1; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        result += separ;
        continue;
      }

      result += separ + this[i];
    }

    return result;
  };
}

module.exports = applyCustomJoin;
