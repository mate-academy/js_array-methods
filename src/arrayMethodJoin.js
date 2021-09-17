'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }

      string += `${this[i]}${separator}`;
    }

    string += this[this.length - 1];

    return string;
  };
}

module.exports = applyCustomJoin;
