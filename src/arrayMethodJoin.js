'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';
    let sep = separator;

    if (separator === null) {
      sep = 'null';
    }

    if (sep === undefined) {
      sep = ',';
    }

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1 && this[i] === undefined) {
        str += '';

        return str;
      }

      if (i === this.length - 1) {
        str += this[i];

        return str;
      }

      if (this[i] === undefined || this[i] === null) {
        str += ',';
        continue;
      }

      str += this[i] + sep;
    }

    return str;
  };
}

module.exports = applyCustomJoin;
