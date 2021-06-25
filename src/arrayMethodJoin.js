'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newString = '';

    if (this !== undefined) {
      for (let i = 0; i < this.length; i++) {
        if (this[i] !== undefined
          && this[i] !== null) {
          newString += this[i];
        } else {
          newString += '';
        }

        if (i < this.length - 1) {
          newString += separator;
        }
      }
    }

    return newString;
  };
}

module.exports = applyCustomJoin;
