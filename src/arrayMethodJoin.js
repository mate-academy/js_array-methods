'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let concatenatedString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        concatenatedString += this[i];
      }

      if (i !== this.length - 1) {
        concatenatedString += separator;
      }
    }

    return concatenatedString;
  };
}

module.exports = applyCustomJoin;
