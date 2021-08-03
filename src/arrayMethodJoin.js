'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let joinedArray = '';

    if (this[0] === null || this[0] === undefined) {
      joinedArray = '';
    } else {
      joinedArray += this[0];
    }

    for (let i = 1; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        joinedArray += separator;
      } else {
        joinedArray += separator + '' + this[i];
      }
    }

    return joinedArray;
  };
}

module.exports = applyCustomJoin;
