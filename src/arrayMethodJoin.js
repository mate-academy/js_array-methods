'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let separ = separator;

    if (separator === undefined) {
      separ = ',';
    }

    for (let i = 0; i < this.length; i++) {
      if (i > 0) {
        result += separ;
      }

      if (this[i] !== undefined && this[i] !== null) {
        result += this[i];
      } else {
        result += '';
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
