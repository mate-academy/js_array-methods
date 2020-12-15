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
      if (this[i] !== null && this[i] !== undefined) {
        if (i === this.length - 1) {
          string += this[i];
        } else {
          string += this[i] + sepp;
        }
      } else {
        string += sepp;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
