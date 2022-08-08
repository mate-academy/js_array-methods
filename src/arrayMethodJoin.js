'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let value = 0; value < this.length; ++value) {
      if (this[value] !== undefined && this[value] !== null) {
        result += this[value];
      }

      if (value !== this.length - 1) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
