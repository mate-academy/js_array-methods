'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';
    let sep = String(separator);

    if (separator === undefined) {
      sep = '';
    }

    if (this.length === 1) {
      str += this;

      return str;
    }

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1 && this[i] === undefined) {
        return str;
      }

      if (i === this.length - 1) {
        str += this[i];

        return str;
      }

      if (this[i] === undefined || this[i] === null) {
        str += sep;
        continue;
      }

      str += this[i] + sep;
    }

    return str;
  };
}

module.exports = applyCustomJoin;
