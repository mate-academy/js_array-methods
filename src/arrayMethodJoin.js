'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let finalString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }

      if (i < this.length - 1) {
        finalString += this[i] + `${separator}`;
      } else {
        finalString += this[i];
      }
    }

    return finalString;
  };
}

module.exports = applyCustomJoin;
