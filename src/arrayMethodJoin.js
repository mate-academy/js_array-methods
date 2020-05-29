'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let output = '';
    let validSeparator = separator;

    if (separator === undefined) {
      validSeparator = ',';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        output += this[i];
      }

      if (i < this.length - 1) {
        output += validSeparator;
      }
    }

    return output;
  };
}

module.exports = applyCustomJoin;
