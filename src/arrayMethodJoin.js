'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let letter = '';
    let str = '';

    for (let counter = 0; counter < this.length; counter++) {
      letter = this[counter];

      if (letter !== null && letter !== undefined) {
        str += letter;
      }

      if (counter !== this.length - 1) {
        str += separator;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
