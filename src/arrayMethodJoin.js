'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const LengthOfArray = this.length;

    for (let i = 0; i < LengthOfArray; i++) {
      const item = this[i];

      if (item !== undefined && item !== null) {
        result += item;
      }

      if (i !== LengthOfArray - 1) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
