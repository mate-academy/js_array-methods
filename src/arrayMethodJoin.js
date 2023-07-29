'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const finalSeparator = separator === undefined ? ',' : separator;

    let result = '';

    for (let i = 0; i < this.length; i++) {
      result += this[i] === undefined || this[i] === null ? '' : this[i];

      if (i < this.length - 1) {
        result += finalSeparator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
