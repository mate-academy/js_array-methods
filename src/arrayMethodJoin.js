'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    let string = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        string += this[i];
      } else {
        string += '';
      }

      if (i < this.length - 1) {
        string += separator;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
