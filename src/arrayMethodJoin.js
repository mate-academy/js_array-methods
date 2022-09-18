'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let output = '';
    const arrLength = this.length;

    for (let i = 0; i < arrLength; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        output += this[i];
      }

      if (i !== arrLength - 1) {
        output += separator;
      }
    }

    return output;
  };
}

module.exports = applyCustomJoin;
