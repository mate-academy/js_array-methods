'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let separatedArray = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        separatedArray += this[i];
      }

      if (i < this.length - 1) {
        separatedArray += separator;
      }
    }

    return separatedArray;
  };
}

module.exports = applyCustomJoin;
