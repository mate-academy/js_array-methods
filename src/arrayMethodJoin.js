'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const divider = String(separator);
    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        result += divider;
      } else {
        result += this[i] + divider;
      }
    }
    return result.slice(0, result.length - divider.length);
  };
}

module.exports = applyCustomJoin;
