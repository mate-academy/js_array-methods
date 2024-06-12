'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let arrayToString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        arrayToString += this[i];
      }

      if (i !== this.length - 1) {
        arrayToString += separator;
      }
    }

    return arrayToString;
  };
}

module.exports = applyCustomJoin;
