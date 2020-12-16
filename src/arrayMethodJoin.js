'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    if (this.length === 0) {
      return string;
    }

    let value = separator;

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      value = `${this[i]}${separator}`;

      if (i === this.length - 1) {
        value = this[i];
      }

      string += value;
    }

    return string;
  };
}

module.exports = applyCustomJoin;
