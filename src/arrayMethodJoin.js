'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined || this[i] === '') {
        if (separator === undefined) {
          str += `,`;
        } else {
          str += `${separator}`;
        }
      } else if (separator === undefined) {
        str += `${this[i]},`;
      } else {
        str += `${this[i]}${separator}`;
      }
    }

    str += this[this.length - 1];

    return str;
  };
}

module.exports = applyCustomJoin;
