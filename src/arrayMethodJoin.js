'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const lastElement = this[this.length - 1];

    for (const element of this) {
      if (element !== undefined && element !== null) {
        result += element;
      }

      if (element !== lastElement) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
