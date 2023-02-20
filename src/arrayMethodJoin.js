'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';
    const arrayLength = this.length;

    for (let i = 0; i < arrayLength; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        string += this[i];
      }

      if (i !== arrayLength - 1) {
        string += separator;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
