'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (!i) {
        result += `${this[i]}`;
      } else {
        result += separator + `${this[i]}`;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
