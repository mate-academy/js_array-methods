'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const strSeparator = `${separator}`;
    let newString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (i === this.length - 1) {
        newString += `${this[i]}`;
      } else {
        newString += `${this[i]}${strSeparator}`;
      }
    }

    return newString;
  };
}

module.exports = applyCustomJoin;
