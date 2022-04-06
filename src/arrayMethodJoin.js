'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (i < this.length - 1) {
        newString = newString + this[i] + separator;
      } else {
        newString += this[i];
      }
    };

    return newString;
  };
}

module.exports = applyCustomJoin;
