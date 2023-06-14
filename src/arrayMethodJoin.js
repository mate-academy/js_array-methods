'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let finalSeparator = separator;

    if (finalSeparator === undefined) {
      finalSeparator = ',';
    }

    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (i !== 0) {
        result += finalSeparator;
      }

      if (this[i] !== null && this[i] !== undefined) {
        result += this[i];
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
