'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (i === this.length - 1) {
        result += this[i];
      } else {
        result += this[i];
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
