'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let string = '';
    const length = this.length;

    for (let i = 0; i < length; i++) {
      const currentSeparator = this[i];

      if (currentSeparator !== null && currentSeparator !== undefined) {
        string += `${currentSeparator}`;
      }

      if (i !== length - 1) {
        string += `${separator}`;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
