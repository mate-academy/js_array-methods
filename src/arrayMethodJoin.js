'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      const currentElement = this[i] !== null && this[i] !== undefined
        ? this[i] : '';

      const adjustedSeparator = separator === null ? 'null' : separator;

      if (i === this.length - 1) {
        result += currentElement;
      } else {
        result += currentElement + adjustedSeparator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
