'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let res = '';

    for (let i = 0; i < this.length; i++) {
      if (i > 0) {
        res += separator;
      }

      if (this[i] !== undefined && this[i] !== null) {
        res += this[i].toString();
      }
    }

    return res;
  };
}

module.exports = applyCustomJoin;
