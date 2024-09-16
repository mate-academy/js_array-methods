'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let separatedString = '';
    const lastIndex = this.length - 1;

    for (let i = 0; i <= lastIndex; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        separatedString += `${this[i]}`;
      }

      if (i !== lastIndex) {
        separatedString += `${separator}`;
      }
    }

    return separatedString;
  };
}

module.exports = applyCustomJoin;
