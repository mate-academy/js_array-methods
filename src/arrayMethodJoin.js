'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      const isLast = i === this.length - 1;
      const isNotNullish = this[i] !== undefined && this[i] !== null;

      if (isNotNullish) {
        result += this[i];
      }

      if (!isLast) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
