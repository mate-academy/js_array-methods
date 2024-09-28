'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultedString = '';

    for (let i = 0; i < this.length; i += 1) {
      const character = this[i];

      if (character !== null && character !== undefined) {
        resultedString += character;
      }

      if (i < this.length - 1) {
        resultedString += separator;
      }
    }

    return resultedString;
  };
}

module.exports = applyCustomJoin;
