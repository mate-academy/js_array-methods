'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(userSeparator = ',') {
    let resultString = '';
    const inputLength = this.length;

    for (let i = 0; i < inputLength; i++) {
      const part = this[i];

      if (part !== null && part !== undefined) {
        resultString += part;
      }

      if (i !== inputLength - 1) {
        resultString += `${userSeparator}`;
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
