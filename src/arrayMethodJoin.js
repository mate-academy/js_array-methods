'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const arrLength = this.length;
    let joinedString = '';

    for (let i = 0; i < arrLength; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        joinedString += this[i];
      }

      if (i !== arrLength - 1) {
        joinedString += separator;
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
