'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (const word of this) {
      if (word === this[this.length - 1]) {
        result += word;
        continue;
      }

      if (word === null || word === undefined) {
        result += `${separator}`;
        continue;
      }

      result += word + `${separator}`;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
