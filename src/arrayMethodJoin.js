'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let resultString = '';

    for (let element = 0; element < this.length; element++) {
      if (this[element] === null || this[element] === undefined) {
        this[element] = '';
      }

      resultString += this[element];

      if (element < this.length - 1) {
        resultString += separator;
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
