'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(userSeparator = ',') {
    let resultString = '';

    for (const part of this) {
      if (part !== null && part !== undefined) {
        resultString += part;
      }

      if (this.indexOf(part) !== this.length - 1) {
        resultString += `${userSeparator}`;
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
