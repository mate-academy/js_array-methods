'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let finalString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        finalString += this[i];
      }

      if (i < this.length - 1) {
        finalString += separator;
      }
    }

    return finalString;
  };
}

module.exports = applyCustomJoin;
