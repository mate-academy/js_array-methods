'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here

    let result = '';

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }
    }

    for (let i = 0; i < this.length - 1; i++) {
      result += this[i];
      result += separator;
    }

    result += this[this.length - 1];

    return result;
  };
}

module.exports = applyCustomJoin;
