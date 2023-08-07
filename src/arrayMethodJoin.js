'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let arrayString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        arrayString += String(this[i]);
      }

      if (i < this.length - 1) {
        arrayString += separator;
      }
    }

    return arrayString;
  };
}

module.exports = applyCustomJoin;
