'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here

    let concatinatedString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        concatinatedString += '';
      } else {
        concatinatedString += this[i];
      }

      if (i < this.length - 1) {
        concatinatedString += separator;
      }
    }

    return concatinatedString;
  };
}
module.exports = applyCustomJoin;
