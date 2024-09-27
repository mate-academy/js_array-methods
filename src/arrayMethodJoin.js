'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let finalString = '';

    for (let x = 0; x < this.length; x++) {
      if (this[x] === null || this[x] === undefined) {
        this[x] = '';
      }

      if ((this.length - 1) === x) {
        finalString += `${this[x]}`;
        break;
      }

      finalString += `${this[x]}${separator}`;
    }

    return finalString;
  };
}

module.exports = applyCustomJoin;
