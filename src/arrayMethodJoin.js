'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let finalString = '';

    for (let i = 0; i < this.length; i++) {
      finalString += (this[i] !== null && this[i] !== undefined
        ? this[i]
        : '');

      if (i < this.length - 1) {
        finalString += separator;
      }
    }

    return finalString;
  };
}

module.exports = applyCustomJoin;
