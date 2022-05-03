'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const thisLength = this.length;

    for (let index = 0; index <= thisLength - 1; index++) {
      if (this[index] !== undefined && this[index] !== null) {
        result += `${this[index]}`;
      }

      if (index !== thisLength - 1) {
        result += `${separator}`;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
