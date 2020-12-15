'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let divider = separator;

    if (separator == null) {
      divider = 'null';
    }

    let str = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        if (i === this.length - 1) {
          str += this[i];
        } else {
          str += this[i] + divider;
        }
      } else {
        str += divider;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
