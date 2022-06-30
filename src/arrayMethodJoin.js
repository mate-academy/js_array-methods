'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    for (let i = 0; i < this.length; i++) {
      const add = this[i];

      if (add !== null && add !== undefined) {
        str += add;
      }

      if (i + 1 !== this.length) {
        str += separator;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
