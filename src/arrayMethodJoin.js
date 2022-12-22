'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let tmpString = '';
    const lastKey = this.length - 1;

    for (const key of this) {
      if (key === null || key === undefined) {
        tmpString += '';
      } else {
        tmpString += key;
      }

      if (key !== this[lastKey]) {
        tmpString += separator;
      }
    }

    return tmpString;
  };
}

module.exports = applyCustomJoin;
