'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    if (separator === undefined) {
      return this.join2(',');
    }

    let joinedString = '';
    const arrayLength = this.length;

    for (let e = 0; e < arrayLength; e++) {
      const arrayElement = this[e];

      if (arrayElement !== null && arrayElement !== undefined) {
        joinedString += arrayElement;
      }

      if (e !== arrayLength - 1) {
        joinedString += separator;
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
