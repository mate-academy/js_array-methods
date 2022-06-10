'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let divider = separator;
    let string = '';

    if (this.length === 0) {
      return string;
    }

    if (divider === undefined) {
      divider = ',';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        if (i !== this.length - 1) {
          string += divider;
        }
      } else if (this[i] !== undefined || this[i] !== null) {
        string += `${this[i]}`;

        if (i !== this.length - 1) {
          string += divider;
        }
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
