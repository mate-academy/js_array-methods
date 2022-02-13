'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined
        && this[i] !== null) {
        result += this[i];
      }

      if (i + 1 !== this.length) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
