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

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      string += this[i];

      if (i === this.length - 1) {
        break;
      }

      string += separator;
    }

    return string;
  };
}

module.exports = applyCustomJoin;
