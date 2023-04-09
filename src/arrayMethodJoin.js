'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (i > 0) {
        result += separator;
      }

      if (this[i] !== null && this[i] !== undefined) {
        result += String(this[i]);
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
