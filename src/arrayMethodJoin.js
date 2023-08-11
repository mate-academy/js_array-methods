'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resStr = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }

      if (!i) {
        resStr += `${this[i]}`;
        continue;
      }

      resStr += `${separator}${this[i]}`;
    }

    return resStr;
  };
}

module.exports = applyCustomJoin;
