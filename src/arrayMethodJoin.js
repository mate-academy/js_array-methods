'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';
    const currentLength = this.length;

    for (let i = 0; i < currentLength; i++) {
      const currentValue = this[i];

      if (currentValue !== undefined && currentValue !== null) {
        joinedString += `${currentValue}`;
      }

      if (i < currentLength - 1) {
        joinedString += `${separator}`;
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
