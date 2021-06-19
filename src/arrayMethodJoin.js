'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let stringOfArray = `${this[0]}`;

    if (this[0] === null || this[0] === undefined) {
      stringOfArray = '';
    }

    for (let i = 1; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        stringOfArray += `${separator}${''}`;
        continue;
      }
      stringOfArray += `${separator}${String(this[i])}`;
    }

    return stringOfArray;
  };
}

module.exports = applyCustomJoin;
