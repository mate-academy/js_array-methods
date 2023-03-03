'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const len = this.length;

    for (let i = 0; i < len; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        result += this[i];
      }

      if (i < len - 1) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
