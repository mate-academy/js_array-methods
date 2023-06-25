'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const resolvedSeparator = separator === undefined ? separator : separator;

    let result = '';

    for (let i = 0; i < this.length; i++) {
      const value = this[i];

      if (value !== null && value !== undefined) {
        result += value;
      }

      if (i !== this.length - 1) {
        result += resolvedSeparator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
