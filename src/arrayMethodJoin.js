'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let res = '';

    for (let i = 0; i < this.length; i++) {
      if (i + 1 === this.length) {
        res += this[i];
      } else {
        res += this[i] + separator;
      }
    }

    return res;
  };
};

module.exports = applyCustomJoin;
