'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';
    let divider = '';
    if (separator === undefined) {
      divider = ',';
    } else if (separator == null) {
      divider = 'null';
    } else {
      divider = separator;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        str += divider;
      } else if (this.length > 1 && i < this.length - 1) {
        str += this[i] + divider;
      } else {
        str += this[i];
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
