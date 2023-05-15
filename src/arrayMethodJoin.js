'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedArrString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        joinedArrString += this[i];
      }

      if (i < this.length - 1) {
        joinedArrString += separator;
      }
    }

    return joinedArrString;
  };
}

module.exports = applyCustomJoin;
