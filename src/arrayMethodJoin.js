'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let concatenatedString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        concatenatedString += this[i];
      }

      if (this.length - i !== 1) {
        concatenatedString += separator;
      }
    }

    return concatenatedString;
  };
}

module.exports = applyCustomJoin;
