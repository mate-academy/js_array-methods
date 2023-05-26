'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';
    const arrayLength = this.length;

    for (let i = 0; i < arrayLength; i++) {
      const arrayElement = this[i];

      if (arrayElement !== null && arrayElement !== undefined) {
        joinedString += arrayElement;
      }

      if (i !== arrayLength - 1) {
        joinedString += separator;
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
