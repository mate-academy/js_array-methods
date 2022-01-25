'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let output = '';
    const indexOfLast = this.length - 1;

    for (const element of this) {
      if (element !== null && element !== undefined) {
        output += element;
      }

      if (element !== this[indexOfLast]) {
        output += separator;
      }
    }

    return output;
  };
}

module.exports = applyCustomJoin;
