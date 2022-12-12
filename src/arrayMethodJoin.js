'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    if (this[0] != null) {
      result += this[0];
    }

    for (let i = 1; i < this.length; i++) {
      let str = '';

      if (this[i] != null) {
        str = this[i];
      }
      result += `${separator}${str}`;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
