'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let separatedString = '';
    const lastIndex = this.length - 1;

    for (let i = 0; i < lastIndex; i++) {
      if (this[i] === null || this[i] === undefined) {
        separatedString += `${separator}`;
      } else {
        separatedString += `${this[i]}${separator}`;
      }
    }

    if (this[lastIndex] !== null && this[lastIndex] !== undefined) {
      separatedString += `${this[lastIndex]}`;
    }

    return separatedString;
  };
}

module.exports = applyCustomJoin;
