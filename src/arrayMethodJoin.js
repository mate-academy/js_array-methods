'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let result = '';
    const length = this.length;

    if (length === 0) {
      result = '';

      return result;
    }

    if (length === 1) {
      result = this[length - 1];

      return result.toString();
    }

    if (length > 1) {
      for (let key of this) {
        if (key === null || key === undefined) {
          key = '';
        }

        result += String(key);

        if (key < length - 1) {
          result += separator;
        }
      }

      return result;
    };
  };
}

module.exports = applyCustomJoin;
