'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let sep = separator;
    let result = '';

    if (sep === null) {
      sep = 'null';
    }

    for (const char of this) {
      if (char !== undefined && char !== null) {
        result += char;
      }

      if (this.indexOf(char) !== this.length - 1) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
