'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    if (!this.length) {
      return '';
    }

    let string = (this[0] === null) ? '' : `${this[0]}`;

    for (let i = 1; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        string += `${separator}`;
      } else {
        string += `${separator}${this[i]}`;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
