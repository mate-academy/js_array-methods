'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';
    let sepp = separator;

    if (this.length === 0) {
      return '';
    }

    if (separator == null) {
      sepp = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        if (this[i] === null || this[i] === undefined) {
          return string;
        } else {
          string += this[i];
        }
      } else if (this[i] === null || this[i] === undefined) {
        string += sepp;
      } else {
        string += this[i] + sepp;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
