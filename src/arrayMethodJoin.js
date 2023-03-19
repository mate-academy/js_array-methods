'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultingString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        resultingString += '';
      } else {
        resultingString += this[i];
      }

      if (i !== this.length - 1) {
        resultingString += separator;
      }
    }

    return resultingString;
  };
}

module.exports = applyCustomJoin;
