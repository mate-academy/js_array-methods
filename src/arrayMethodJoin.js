'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        result += this[i];
      }

      if (this[i] !== this[this.length - 1]) {
        result += separator;
      }
    }

    return result;
  };
}
module.exports = applyCustomJoin;
