'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedText = '';
    const arrayLength = this.length;

    for (let i = 0; i < arrayLength; i++) {
      const cellInput = this[i];

      if (cell !== null && cell !== undefined) {
        joinedText += cellInput;
      }

      if (i < arrayLength - 1) {
        joinedText += separator;
      }
    }

    return joinedText;
  };
}

module.exports = applyCustomJoin;
