'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let text = '';
    const arrayLength = this.length;

    for (let i = 0; i < arrayLength; i++) {
      const cell = this[i];

      if (cell !== null && cell !== undefined) {
        text += cell;
      }

      if (i < arrayLength - 1) {
        text += separator;
      }
    }

    return text;
  };
}

module.exports = applyCustomJoin;
