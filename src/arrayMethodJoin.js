'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const lastNumber = this.length - 1;

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        result += this[i];
      }

      if (i !== lastNumber) {
        result += separator;
      }
    }

    return result;
  };
}
module.exports = applyCustomJoin;
