'use strict';

/**
 * Implement method join
 */
function applyCustomJoin(...arg) {
  [].__proto__.join2 = function(separator) {
    let str = '';

    if (this.length === 0) {
      return str;
    }

    if (this[0] === null) {
      str = '';
    } else {
      str += this[0];
    }

    if (separator === undefined
      || typeof separator === 'undefined') {
      for (let i = 1; i < this.length; i++) {
        str += ',' + `${this[i]}`;
      }

      return str;
    }

    for (let i = 1; i < this.length; i++) {
      if (typeof this[i] === 'undefined'
         || this[i] === null) {
        str += `${separator}`;
      } else {
        str += `${separator}${this[i]}`;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
