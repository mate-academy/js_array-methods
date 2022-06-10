'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultingString = '';

    for (let i = 0; i < this.length; i++) {
      const char = this[i];

      if (char !== undefined && char !== null) {
        resultingString += char;
      }

      if (i !== this.length - 1) {
        resultingString += separator;
      }
    }

    return resultingString;
  };
}

module.exports = applyCustomJoin;
