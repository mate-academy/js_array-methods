'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let result = '';
    const resultArray = [];

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        resultArray[resultArray.length] = '';
      } else {
        resultArray[resultArray.length] = this[i];
      }
    }

    for (let i = 0; i < resultArray.length; i++) {
      result += resultArray[i];

      if (i !== resultArray.length - 1) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
