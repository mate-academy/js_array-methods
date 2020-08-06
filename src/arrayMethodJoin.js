'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let res = '';
    const sepStr = String(separator);

    if (this.length === 0) {
      return res;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        res += sepStr;
      } else if (i !== this.length - 1) {
        res += this[i] + sepStr;
      } else {
        res += this[i];
      }
    }

    return res;
  };
}

module.exports = applyCustomJoin;
