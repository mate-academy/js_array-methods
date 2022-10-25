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
      if (this[i] === null || typeof this[i] === 'undefined') {
        string += '';
        string += separator;
      } else {
        string += this[i];
        string += separator;
      }
    }

    if (this[this.length - 1] === null
      || typeof this[this.length - 1] === 'undefined') {
      string += '';
    } else {
      string += this[this.length - 1];
    }

    return string;
  };
}

module.exports = applyCustomJoin;
