'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let returnedString = '';

    for (let i = 0; i < this.length; i++) {
      if (i !== 0) {
        returnedString += separator;
      }

      if (this[i] === undefined || this[i] === null) {
        returnedString += '';
      } else {
        returnedString += this[i];
      }
    }

    return returnedString;
  };
}

module.exports = applyCustomJoin;
