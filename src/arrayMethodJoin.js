'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinArray = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        joinArray += this[i];
      }

      if (i !== this.length - 1) {
        joinArray += separator;
      }
    }

    return joinArray;
  };
}

module.exports = applyCustomJoin;
