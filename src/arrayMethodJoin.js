'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';
    const lastInArray = this[this.length - 1];

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        resultString += `${separator}`;
      } else {
        resultString += this[i] + `${separator}`;
      }
    }

    if (lastInArray !== null && lastInArray !== undefined) {
      resultString += lastInArray;
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
