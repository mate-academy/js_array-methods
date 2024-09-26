'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    let newString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        newString += separator;
      } else if (i !== this.length - 1) {
        newString += `${this[i]}${separator}`;
      } else {
        newString += this[i];
      }
    }

    return newString;
  };
}

module.exports = applyCustomJoin;
