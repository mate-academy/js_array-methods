'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let result = '';
    if (this.length < 1) {
      return '';
    }
    if (this[0] !== null && this[0] !== undefined) {
      result += this[0];
    }
    for (let i = 1; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined || this[i].length < 0) {
        result += separator + '';
      } else {
        result += separator + '' + this[i];
      }
    }
    return result;
  };
}

module.exports = applyCustomJoin;
