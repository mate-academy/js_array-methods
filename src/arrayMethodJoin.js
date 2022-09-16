'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let res = '';
    let sep = separator;

    if (sep === undefined || isNaN(sep)) {
      sep = ',';
    }

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1 && this[i] === undefined) {
        break;
      }

      if (i === this.length - 1) {
        res += this[i];
        break;
      }

      if (this[i] === null || this[i] === undefined) {
        res += sep;
        continue;
      }

      res += `${this[i]}${sep}`;
    }

    return res;
  };
}

module.exports = applyCustomJoin;
