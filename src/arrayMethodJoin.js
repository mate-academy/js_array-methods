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
        newString += separator;
      } else {
        if (separator === null) {
          newString += this[i] + 'null';
        } else if (separator === '') {
          newString += this[i];
        } else if (separator === undefined) {
          newString += this[i] + ',';
        } else {
          newString += this[i] + separator;
        }
      }
    }
    newString += this[this.length - 1];

    return newString;
  };
}

module.exports = applyCustomJoin;
