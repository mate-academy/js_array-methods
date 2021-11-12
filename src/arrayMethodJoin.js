'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';

    for (let elIndex = 0; elIndex < this.length; elIndex++) {
      if (this[elIndex] !== undefined && this[elIndex] !== null) {
        joinedString += this[elIndex];
      }

      if (elIndex !== this.length - 1) {
        joinedString += separator;
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
