'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i <= this.length; i++) {
      const isLastItem = i < this.length - 1;
      const value = this[i] !== undefined && this[i] !== null ? this[i] : '';

      result += isLastItem ? `${value}${separator}` : `${value}`;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
