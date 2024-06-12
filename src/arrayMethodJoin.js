'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let stringResult = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        stringResult += this[i];
      }

      if (i !== this.length - 1) {
        stringResult += separator;
      }
    }

    return stringResult;
  };
}
module.exports = applyCustomJoin;
