'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (const element of this) {
      if (element !== undefined && element !== null) {
        result += element;
      }

      if (element !== this[this.length - 1]) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
