'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    const newSeparator = separator === undefined ? ',' : separator;

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        result = result + this[i];
      }
      result = result + newSeparator;
    }

    return result.substring(0, result.length - String(newSeparator).length);
  };
}

module.exports = applyCustomJoin;
