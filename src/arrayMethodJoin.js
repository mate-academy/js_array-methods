'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = `,`) {
    // write code here

    let result = '';
    const sep = separator;

    if (this.length === 0) {
      return result;
    }

    for (let item = 0; item < this.length; item++) {
      if (this[item] === null || this[item] === undefined) {
        this[item] = ``;
      }

      if (item === this.length - 1) {
        result += `${this[item]}`;
        break;
      }
      result += `${this[item]}${sep}`;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
