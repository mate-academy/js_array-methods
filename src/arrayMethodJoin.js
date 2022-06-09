'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';

    for (let i = 0; i < this.length; i++) {
      const indexedPart = this[i];

      if (indexedPart !== null && indexedPart !== undefined) {
        joinedString += indexedPart;
      }

      if (i < this.length - 1) {
        joinedString += separator;
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
