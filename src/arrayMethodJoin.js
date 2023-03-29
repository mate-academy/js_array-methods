'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let res = this[0];

    if (!this.length) {
      return '';
    }

    if (res === null) {
      res = '';
    }

    for (let i = 1; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        res += separator + '';
        continue;
      }
      res += String(separator) + this[i];
    }

    res = String(res);

    return res;
  };
}

module.exports = applyCustomJoin;
