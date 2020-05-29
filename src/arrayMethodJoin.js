'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    } else if (this.length === 1) {
      return `${this[0]}`;
    }

    let resultString = `${this[0]}`;

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      resultString += `${separator}${this[i]}`;
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
