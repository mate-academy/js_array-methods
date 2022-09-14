'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const arrayLength = this.length;

    let convertedString = '';

    for (let i = 0; i < arrayLength; i++) {
      convertedString += (this[i] === undefined || this[i] === null)
        ? ''
        : this[i];
      convertedString += i !== arrayLength - 1 ? separator : '';
    }

    return convertedString;
  };
}

module.exports = applyCustomJoin;
