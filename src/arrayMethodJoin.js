'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';

    for (let index = 0; index < this.length; index++) {
      if (this[index] !== null && this[index] !== undefined) {
        joinedString += this[index];
      }

      if (this[index] !== this[this.length - 1]) {
        joinedString += separator;
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
