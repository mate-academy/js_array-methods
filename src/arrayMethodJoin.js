'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let str = '';
    let count = 0;

    for (let ch of this) {
      count++;

      if (ch === undefined || ch === null) {
        ch = '';
      }

      if (count !== this.length) {
        str += `${ch}${separator}`;
      } else {
        str += ch;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
