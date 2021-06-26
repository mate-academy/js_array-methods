'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let result = '';
    const arrayOfValues = [NaN, false, 0];

    for (const valueToAdd of this) {
      if (valueToAdd || arrayOfValues.includes(valueToAdd)) {
        result += valueToAdd;
      }

      if (valueToAdd !== this[this.length - 1]) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
