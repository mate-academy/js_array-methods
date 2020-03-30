'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (!this) {
      return '';
    }

    let res = this[0] === undefined || this[0] == null
      ? '' : String(this[0]);

    for (let i = 1; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        res += separator + '';
      } else {
        res += separator + String(this[i]);
      }
    }

    return res;
  };
}

module.exports = applyCustomJoin;
