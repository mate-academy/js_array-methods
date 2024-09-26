'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newChar = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        newChar += this[i];
      }

      if (i !== this.length - 1) {
        newChar += separator;
      }
    }

    return newChar;
  };
}

module.exports = applyCustomJoin;
