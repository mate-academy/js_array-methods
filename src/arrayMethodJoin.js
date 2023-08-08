'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let modifiedArray = '';
    const ArrayLength = this.length;

    for (let i = 0; i < ArrayLength; i++) {
      const arrayItem = this[i];

      if (arrayItem !== null && arrayItem !== undefined) {
        modifiedArray += arrayItem;
      }

      if (i < ArrayLength - 1) {
        modifiedArray += separator;
      }
    }

    return modifiedArray;
  };
}

module.exports = applyCustomJoin;
