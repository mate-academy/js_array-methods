'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    let validSeparator = separator;

    if (validSeparator === null) {
      validSeparator = 'null';
    }

    for (const char of this) {
      let validChar = char;

      if (validChar === null || validChar === undefined) {
        validChar = '';
      }

      if (this.lastIndexOf(char) !== this.length - 1) {
        result += validChar + validSeparator;
      } else {
        result += validChar;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
