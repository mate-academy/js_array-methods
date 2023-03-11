'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newArray = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        newArray += this[i];
      }

      if (i < this.length - 1) {
        newArray += separator;
      }
    }

    return newArray;
  };
}

module.exports = applyCustomJoin;
