'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedStr = '';
    const arrayLength = this.length;

    for (let i = 0; i < arrayLength; ++i) {
      if (this[i] !== null && this[i] !== undefined) {
        if (i < arrayLength - 1) {
          joinedStr += `${this[i]}${separator}`;
        } else {
          joinedStr += `${this[i]}`;
        }
      } else {
        joinedStr += `${separator}`;
      }
    }

    return joinedStr;
  };
}

module.exports = applyCustomJoin;
