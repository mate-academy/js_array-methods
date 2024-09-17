'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';

    for (let i = 0; i < this.length; i++) {
      const letter = this[i];

      if (letter !== null && letter !== undefined) {
        joinedString += letter;
      }

      if (i !== this.length - 1) {
        joinedString += separator;
      }
    };

    return joinedString;
  };
}

module.exports = applyCustomJoin;
