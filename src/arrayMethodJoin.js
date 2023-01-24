'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resStr = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        resStr += this[i];
      }

      if (i + 1 < this.length) {
        resStr += separator;
      }
    }

    return resStr;
  };
}

module.exports = applyCustomJoin;
