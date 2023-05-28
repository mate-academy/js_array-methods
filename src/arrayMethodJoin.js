'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let word = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        word += `${this[i]}`;
      }

      if (i !== this.length - 1) {
        word += `${separator}`;
      }
    }

    return word;
  };
}

module.exports = applyCustomJoin;
