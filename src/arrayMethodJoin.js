'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    if (this.length === 0) {
      return '';
    }

    let str = '';
    let k = this[0];

    if (k === undefined || k === null) {
      str = '';
    } else {
      str = String(k);
    }

    for (let i = 1; i < this.length; i++) {
      k = this[i];

      if (k === undefined || k === null) {
        k = '';
      }

      if (separator !== undefined) {
        str = str + separator + k;
      } else {
        str = str + ',' + k;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
