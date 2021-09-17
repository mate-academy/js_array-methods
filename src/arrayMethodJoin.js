'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';
    let sep;

    if (this.length === 0) {
      return str;
    }

    if (typeof separator === `undefined`) {
      sep = ',';
    } else {
      sep = separator;
    }

    for (let el = 0; el < this.length - 1; el++) {
      if (this[el] === null || this[el] === undefined) {
        this[el] = '';
      }
      str = `${str}${this[el]}${sep}`;
    }

    str = str + this[this.length - 1];

    return str;
  };
}

module.exports = applyCustomJoin;
