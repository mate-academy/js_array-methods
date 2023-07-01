'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let finalString = '';

    for (let i = 0; i < this.length; i++) {
      if (i) {
        finalString += String(separator);
      }

      if (this[i] !== null && this[i] !== undefined) {
        finalString += this[i];
      }
    }

    return finalString;
  };
}

module.exports = applyCustomJoin;
