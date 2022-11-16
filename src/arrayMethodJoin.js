'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        newString += this[i];
      }

      if (i !== this.length - 1) {
        newString += separator;
      }
    }

    return newString;
  };
}

module.exports = applyCustomJoin;
