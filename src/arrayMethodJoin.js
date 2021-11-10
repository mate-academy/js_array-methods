'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let addedString = '';

    for (let index = 0; index < this.length; index++) {
      if (this[index] !== null && this[index] !== undefined) {
        addedString += this[index];
      }

      if (this[index] !== this[this.length - 1]) {
        addedString += separator;
      }
    }

    return addedString;
  };
}

module.exports = applyCustomJoin;
