'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (const [idx, el] of this.entries()) {
      if (idx === this.length - 1 && el !== undefined) {
        result += `${el}`;
      }

      if (idx === this.length - 1 && el === undefined) {
        return result;
      }

      if (el === undefined || el === null) {
        result += `${separator}`;
        continue;
      }

      if (idx < this.length - 1) {
        result += `${el}${separator}`;
        continue;
      }
    }

    return result;

    // sorry, I dont find a better solution
  };
}

module.exports = applyCustomJoin;
