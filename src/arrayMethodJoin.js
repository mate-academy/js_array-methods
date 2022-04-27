'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const length = this.length;

    for (let i = 0; i < length; i++) {
      // !this[i] doesn't work since it removes 0 and NaN also
      if (this[i] !== undefined && this[i] !== null) {
        result += this[i];
      }

      if (i !== length - 1) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
