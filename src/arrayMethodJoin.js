'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';

    for (const char of this) {
      if (char === undefined || char === null) {
        resultString += separator;
        continue;
      }

      if (char !== this[this.length - 1]) {
        resultString += `${char}${separator}`;
      } else {
        resultString += char;
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
