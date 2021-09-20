'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    if (this.length === 0) {
      return str;
    }

    for (let el = 0; el < this.length; el++) {
      if (this[el] === null || this[el] === undefined) {
        this[el] = '';
      }

      if (el === this.length - 1) {
        str = `${str}${this[el]}`;
      } else {
        str = `${str}${this[el]}${separator}`;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
