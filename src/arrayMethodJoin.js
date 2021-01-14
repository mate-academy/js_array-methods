'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let result = '';
    const x = this.length;

    if (x === 0) {
      result = '';

      return result;
    }

    if (x === 1) {
      result = this[x - 1];

      return result.toString();
    }

    if (x > 1) {
      for (let key of this) {
        if (key === null || key === undefined) {
          key = '';
        }

        result += String(key);

        if (key < x - 1) {
          result += separator;
        }
      }

      return result;
    };
  };
}

module.exports = applyCustomJoin;
