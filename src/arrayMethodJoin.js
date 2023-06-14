'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultingString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        resultingString += this[i];
      }

      if (i < this.length - 1) {
        resultingString += separator;
      }
    };

    return resultingString;
  };
}

module.exports = applyCustomJoin;
