'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let str = '';

    if (this.length === 0) {
      return str;
    }

    for (let index = 0; index < this.length - 1; index++) {
      if (this[index] === undefined || this[index] === null) {
        str += `${separator}`;
      } else {
        str += `${this[index]}${separator}`;
      }
    }

    return str + `${this[this.length - 1]}`;
  };
}

module.exports = applyCustomJoin;
