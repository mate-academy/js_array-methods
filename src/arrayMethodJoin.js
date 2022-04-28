'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let result = '';

    for (let i = 0; i < this.length; i++) {
      const elm = this[i];

      if (elm !== undefined && elm !== null) {
        result += elm;
      }

      if (i + 1 < this.length) {
        if (separator === undefined) {
          result += ',';
        } else {
          result += separator;
        }
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
