'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let joinedArray = '';

    for (let i = 0; i < this.length; i++) {
      const elm = this[i];

      if (elm !== undefined && elm !== null) {
        joinedArray += elm;
      }

      if (i + 1 < this.length) {
        if (separator === undefined) {
          joinedArray += ',';
        } else {
          joinedArray += separator;
        }
      }
    }

    return joinedArray;
  };
}

module.exports = applyCustomJoin;
