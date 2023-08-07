'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newString = '';

    for (let i = 0; i < this.length; i++) {
      const arrayElement = this[i];

      if (arrayElement !== null && arrayElement !== undefined) {
        newString += arrayElement;
      }

      if (i !== this.length - 1) {
        newString += separator;
      }
    }

    return newString;
  };
}

module.exports = applyCustomJoin;
