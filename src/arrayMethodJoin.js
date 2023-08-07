'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let arrayString = '';

    for (let i = 0; i < this.length; i++) {
      const arrayElement = this[i];

      if (arrayElement !== null && arrayElement !== undefined) {
        arrayString += String(arrayElement);
      }

      if (i < this.length - 1) {
        arrayString += separator;
      }
    }

    return arrayString;
  };
}

module.exports = applyCustomJoin;
