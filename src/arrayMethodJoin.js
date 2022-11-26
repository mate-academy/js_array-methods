'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        result = result + this[i];
      }
      result = result + separator;
    }

    return result.substring(0, result.length - String(separator).length);
  };
}

module.exports = applyCustomJoin;
