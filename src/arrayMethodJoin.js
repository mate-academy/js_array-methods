'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length < 1) {
      return '';
    }

    let string = '';

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        string += this[i];
      }

      string += separator;
    }

    if (this[this.length - 1] !== undefined && this[this.length - 1] !== null) {
      string += this[this.length - 1];
    }

    return string;
  };
}

module.exports = applyCustomJoin;
