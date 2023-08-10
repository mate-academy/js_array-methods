'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const newSeparator = separator === undefined ? ',' : separator;

    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        result += this[i];
      }

      if (i < this.length - 1 && (this[i] !== null || this[i] !== undefined)) {
        result += newSeparator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
