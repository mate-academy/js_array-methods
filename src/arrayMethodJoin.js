'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let finalString = '';

    if (this[0] !== null && this[0] !== undefined) {
      finalString = `${this[0]}`;
    }

    for (let i = 1; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined || this[i].length < 0) {
        finalString += separator + '';
      } else {
        finalString += separator + '' + this[i];
      }
    }

    return finalString;
  };
}

module.exports = applyCustomJoin;
