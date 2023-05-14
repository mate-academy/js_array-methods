'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';
    const lastIndex = this.length - 1;
    const ignoredValues = [null, undefined];

    for (let i = 0; i <= lastIndex; i++) {
      const character = this[i];

      if (!ignoredValues.includes(character)) {
        joinedString += character;
      }

      if (i !== lastIndex) {
        joinedString += separator;
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
