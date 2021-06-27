'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let stringfFromArray = '';
    const sep = String(separator);

    for (const char of this) {
      if (char !== null && char !== undefined) {
        stringfFromArray += char + sep;
      } else {
        stringfFromArray += sep;
      }
    }

    if (sep) {
      let stringWithoutLastChar = '';

      for (let i = 0; i < stringfFromArray.length - sep.length; i++) {
        stringWithoutLastChar += stringfFromArray[i];
      }

      return stringWithoutLastChar;
    }

    return stringfFromArray;
  };
}

module.exports = applyCustomJoin;
