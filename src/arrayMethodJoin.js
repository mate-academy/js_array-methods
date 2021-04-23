'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newString = '';

    for (const key of this) {
      if (this.length === 1) {
        newString += key;
      } else if (key === null || key === undefined) {
        newString += separator;
      } else if (key === this[this.length - 1]) {
        newString += key;
      } else {
        newString += `${key}${separator}`;
      }
    }

    return newString;
  };
}

module.exports = applyCustomJoin;
