'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      const value = this[i];

      if (value !== null && value !== undefined) {
        result += value;
      }
      result += (i < this.length - 1) ? separator : '';
    }

    return result;
  };
}

module.exports = applyCustomJoin;
