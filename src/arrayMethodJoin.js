'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let result = ((this.length !== 0) && this[0] !== null) ? `${this[0]}` : '';

    for (let i = 1; i < this.length; i++) {
      if ((this[i] === undefined) || (this[i]) === null) {
        result += `${separator}`;
      } else {
        result += `${separator}${this[i]}`;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
