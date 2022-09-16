'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedChars = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        joinedChars += this[i];
      }

      if (i !== this.length - 1) {
        joinedChars += separator;
      }
    }

    return joinedChars;
  };
}

module.exports = applyCustomJoin;
