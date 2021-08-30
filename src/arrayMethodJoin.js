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
      if (this[i] !== undefined && this[i] !== null) {
        string += `${this[i]}${separator}`;
      } else {
        string += separator;
      }
    }

    return string + this[this.length - 1];
  };
}

module.exports = applyCustomJoin;
