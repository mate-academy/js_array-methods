'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let targetString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        targetString += this[i];
      }

      if (i !== this.length - 1) {
        targetString += separator;
      }
    }

    return targetString;
  };
}

module.exports = applyCustomJoin;
