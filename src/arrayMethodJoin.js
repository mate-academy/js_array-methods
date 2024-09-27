'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let returnedString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        returnedString += this[i];
      }

      if (i !== this.length - 1) {
        returnedString += separator;
      }
    }

    return returnedString;
  };
}

module.exports = applyCustomJoin;
