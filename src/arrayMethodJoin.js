'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        if (i !== this.length - 1) {
          string += `${this[i]}${separator}`;
        } else {
          string += `${this[i]}`;
        };
      } else {
        if (i !== this.length - 1) {
          string += separator;
        } else {
          string += '';
        };
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
