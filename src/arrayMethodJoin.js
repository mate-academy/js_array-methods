'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let finalString = '';

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }

      finalString += `${this[i]}${separator}`;
    }

    finalString += this[this.length - 1];

    return finalString;
  };
}

module.exports = applyCustomJoin;
