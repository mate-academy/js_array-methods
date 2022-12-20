'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newString = '';

    if (this.length === 1) {
      newString += this;

      return newString;
    }

    for (let i = 0; i < this.length; i++) {
      if (typeof this[i] === 'undefined' || this[i] === null) {
        this[i] = '';
      }

      if (i === (this.length - 1)) {
        newString += `${this[i]}`;
      } else {
        newString += `${this[i]}${separator}`;
      }
    }

    return newString;
  };
}

module.exports = applyCustomJoin;
