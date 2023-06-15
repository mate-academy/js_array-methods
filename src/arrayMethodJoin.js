'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';

    const finalSeparator = separator === undefined ? ',' : separator;

    for (let i = 0; i < this.length; i++) {
      if (i > 0) {
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
