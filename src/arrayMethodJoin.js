'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let stringfFromArray = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        stringfFromArray += this[i];
      }

      if (this.length - i !== 1) {
        stringfFromArray += separator;
      }
    }

    return stringfFromArray;
  };
}

module.exports = applyCustomJoin;
