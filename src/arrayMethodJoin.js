'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let str = '';

    for (let i = 0; i < this.length; i++) {
      if (i === 0 && this[i] === null) {
        continue;
      } else if (this[i] === null || this[i] === undefined) {
        str += `${separator}`;
      } else if (i === 0) {
        str += `${this[i]}`;
      } else {
        str += `${separator}${this[i]}`;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
