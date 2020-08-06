'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let rightSeparator = separator;

    if (separator === undefined) {
      rightSeparator = ',';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        result += this[i];
      } else {
        result += '';
      }

      if (i < this.length - 1) {
        result += rightSeparator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
