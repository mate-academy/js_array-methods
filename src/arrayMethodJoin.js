'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let newString = '';

    if (this.length === 0) {
      return newString;
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        newString = newString + separator;
      } else {
        if (separator === undefined) {
          newString = newString + this[i] + ',';
        } else {
          newString = newString + this[i] + separator;
        }
      }
    }
    newString = newString + this[this.length - 1];

    return newString;
  };
}

module.exports = applyCustomJoin;
