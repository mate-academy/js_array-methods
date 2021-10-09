'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';
    const arrayLength = this.length;

    for (let i = 0; i < arrayLength; ++i) {
      if (this[i] !== null && this[i] !== undefined) {
        if (i < arrayLength - 1) {
          string += `${this[i]}${separator}`;
        } else {
          string += `${this[i]}`;
        }
      } else {
        string += `${separator}`;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
