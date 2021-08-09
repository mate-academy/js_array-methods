'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let arrayToString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        arrayToString += `${separator}`;
        continue;
      }

      if (i === this.length - 1) {
        arrayToString += this[i];
        break;
      }

      arrayToString += this[i] + `${separator}`;
    }

    return arrayToString;
  };
}

module.exports = applyCustomJoin;
