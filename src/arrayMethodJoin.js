'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const STRING_SEPARATOR = String(separator);
    let finalString = '';

    for (let i = 0; i < this.length; i++) {
      const arrayElement = this[i];

      if (arrayElement === undefined || arrayElement === null) {
        finalString += STRING_SEPARATOR;
        continue;
      }

      finalString += arrayElement + STRING_SEPARATOR;
    }

    return finalString.slice(0, finalString.length - STRING_SEPARATOR.length);
  };
}

module.exports = applyCustomJoin;
