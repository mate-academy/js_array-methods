'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let result = '';
    const lastElement = this[this.length - 1];

    for (let i = 0; i < this.length - 1; i++) {
      const word = this[i];

      if (word !== null && word !== undefined) {
        result += `${this[i]}`;
      }

      result += `${separator}`;
    }

    if (!this.length) {
      return '';
    }

    if (lastElement !== null && lastElement !== undefined) {
      result += `${lastElement}`;
    }

    return result;
  };
}

applyCustomJoin();
[0, 1, 2, 3].join2();

module.exports = applyCustomJoin;
