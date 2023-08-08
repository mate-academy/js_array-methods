'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinString = '';
    const arrayLength = this.length;

    for (let i = 0; i < arrayLength; i++) {
      const arrayElement = this[i];

      if (arrayElement !== null && arrayElement !== undefined) {
        joinString += arrayElement;
      }

      if (i !== arrayLength - 1) {
        joinString += separator;
      }
    }

    return joinString;
  };
}

module.exports = applyCustomJoin;
