'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const LENGTH_OF_ARRAY = this.length;

    for (let i = 0; i < LENGTH_OF_ARRAY; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        result += this[i];
      }

      if (i !== LENGTH_OF_ARRAY - 1) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
