'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedArray = '';

    for (let q = 0; q < this.length; q++) {
      if (this[q] !== undefined & this[q] !== null) {
        joinedArray += this[q];
      }

      if (this[q] !== this[this.length - 1]) {
        joinedArray += separator;
      }
    }

    return joinedArray;
  };
}

module.exports = applyCustomJoin;
