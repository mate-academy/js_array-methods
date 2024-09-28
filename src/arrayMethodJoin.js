'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let res = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        res += this[i];
      }

      if (this.length - 1 !== i) {
        res += separator;
      }
    }

    return res;
  };
}

module.exports = applyCustomJoin;
