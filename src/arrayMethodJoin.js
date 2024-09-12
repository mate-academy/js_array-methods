'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let symbol = '';
    if (separator === undefined) {
      symbol = ',';
    } else {
      symbol = separator;
    }

    let result = '';
    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        result += '';
      } else {
        result += this[i];
      }
      if (i !== this.length - 1) {
        result += symbol;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
