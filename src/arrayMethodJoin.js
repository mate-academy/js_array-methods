'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';

    for (let j = 0; j < this.length; j++) {
      if (this[j] !== undefined && this[j] !== null) {
        resultString += this[j];
      }

      if (j !== this.length - 1) {
        resultString += separator;
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
