'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let copySeparator = separator;

    if (separator === undefined) {
      copySeparator = ',';
    }

    for (let i = 0; i < this.length; i++) {
      const value = this[i];

      if (value !== null && value !== undefined) {
        result += value;
      }

      if (i !== this.length - 1) {
        result += copySeparator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
