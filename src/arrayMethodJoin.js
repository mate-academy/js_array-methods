'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const arrayLength = this.length;
    const blankSpace = '';
    let convertedString = '';

    for (let i = 0; i < arrayLength; i++) {
      const element = this[i];

      convertedString += (element === undefined || element === null)
        ? blankSpace
        : element;

      convertedString += i !== arrayLength - 1
        ? separator
        : blankSpace;
    }

    return convertedString;
  };
}

module.exports = applyCustomJoin;
