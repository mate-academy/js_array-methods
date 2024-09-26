'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resStr = '';

    if (this.length === 0) {
      return resStr;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        resStr += this[i];
      }

      if (i !== this.length - 1) {
        resStr += separator;
      }
    }

    return resStr;
  };
}

module.exports = applyCustomJoin;
