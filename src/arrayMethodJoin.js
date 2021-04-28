'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newString = '';

    if (this.length === 0) {
      return newString;
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        newString += separator;
        continue;
      }
      newString += `${this[i]}${separator}`;
    }

    newString += this[this.length - 1];

    return newString;
  };
}

module.exports = applyCustomJoin;
