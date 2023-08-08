'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const arrLength = this.length;
    let joinedString = '';

    for (let i = 0; i < arrLength; i++) {
      const arrayElement = this[i];

      if (arrayElement !== null && arrayElement !== undefined) {
        joinedString += arrayElement;
      }

      if (i !== arrLength - 1) {
        joinedString += separator;
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
