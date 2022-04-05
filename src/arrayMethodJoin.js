'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resStr = '';

    for (let i = 0; i < this.length; i++) {
      if (i > 0) {
        resStr += separator;
      }

      if (this[i] !== undefined && this[i] !== null) {
        resStr += this[i];
      }
    }

    return resStr;
  };
}

module.exports = applyCustomJoin;
