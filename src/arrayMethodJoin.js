'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    if (this.length >= 1 && this[0] !== null) {
      result += String(this[0]);
    }

    for (let i = 1; i < this.length; i++) {
      result += String(separator);

      if (this[i] !== null && this[i] !== undefined) {
        result += String(this[i]);
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
