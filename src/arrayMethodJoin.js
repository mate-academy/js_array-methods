'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let finalArray = [];

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        finalArray += this[i];
      }

      if (i < this.length - 1) {
        finalArray += separator;
      }
    }

    return finalArray;
  };
}

module.exports = applyCustomJoin;
