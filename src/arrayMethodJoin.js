'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newString = '';

    for (let i = 0; i < this.length; i++) {
      if (i !== this.length && i !== 0) {
        newString += separator;
      }

      if (this[i] !== null && this[i] !== undefined) {
        newString += this[i];
      }
    }

    return newString;
  };
}

module.exports = applyCustomJoin;
