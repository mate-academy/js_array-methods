'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 1) {
      return this.toString();
    }

    let sep = separator;

    if (sep === null) {
      sep = 'null';
    }

    let str = '';

    for (let i = 0; i < this.length; i++) {
      const sepCurrent = i === this.length - 1 ? '' : sep;

      if (this[i] === null || this[i] === undefined) {
        str += '' + sepCurrent;
      } else {
        str += this[i] + sepCurrent;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
