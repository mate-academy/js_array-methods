'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let validSeparator = separator;
    let joinedString = '';
    const emptyElement = '';

    if (separator === null) {
      validSeparator = 'null';
    }

    for (let index = 0; index < this.length; index++) {
      if (this[index] === null || this[index] === undefined) {
        joinedString += emptyElement + validSeparator;
        continue;
      }

      if (index === this.length - 1) {
        joinedString += this[index];
      } else {
        joinedString += this[index] + validSeparator;
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
