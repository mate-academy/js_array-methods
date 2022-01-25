'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let output = '';
    const elementLast = this[this.length - 1];

    for (const element of this) {
      if (element !== null && element !== undefined) {
        output += element;
      }

      if (element !== elementLast) {
        output += separator;
      }
    }

    return output;
  };
}

module.exports = applyCustomJoin;
