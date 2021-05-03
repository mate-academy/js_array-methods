'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    let i = 0;

    for (const char of this) {
      i++;

      if (char === null || char === undefined) {
        if (i === this.length) {
          return result;
        }

        result += `${separator}`;
        continue;
      }

      if (i === this.length) {
        result += char;

        return result;
      }
      result += char + `${separator}`;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
