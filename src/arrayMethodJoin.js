'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinResultArray = '';

    for (let index = 0; index < this.length; index++) {
      if (this[index] !== null && this[index] !== undefined) {
        joinResultArray += this[index];
      }

      if (index !== this.length - 1) {
        joinResultArray += separator;
      }
    }

    return joinResultArray;
  };
}

module.exports = applyCustomJoin;
