'use strict';
/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    if (!this.length) {
      return string;
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this.length === 1) {
        string += this[i];
      } else if (this[i] === null || this[i] === undefined) {
        string += separator;
      } else {
        string += `${this[i].toString()}${separator}`;
      }
    }

    return string + this[this.length - 1];
  };
}

module.exports = applyCustomJoin;
