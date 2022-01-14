'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let copy = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        copy += this[i];
      }

      if (i < this.length - 1) {
        copy += separator;
      }
    }

    return copy;
  };
}

module.exports = applyCustomJoin;
