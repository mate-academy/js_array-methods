'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let output = '';
    let correctSeparator = separator;

    if (separator === undefined) {
      correctSeparator = ',';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        output += this[i];
      }

      if (i < this.length - 1) {
        output += correctSeparator;
      }
    }

    return output;
  };
}

module.exports = applyCustomJoin;
