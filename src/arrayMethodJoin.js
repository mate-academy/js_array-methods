'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';

    for (let i = 0; i < this.length; i++) {
      if (i > 0) {
        resultString += separator;
      }

      if (this[i] !== undefined && this[i] !== null) {
        resultString += this[i].toString();
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
