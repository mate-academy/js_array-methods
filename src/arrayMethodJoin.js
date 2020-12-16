'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let newStr = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }
      newStr = newStr + this[i];

      if (this.length - i > 1) {
        newStr += separator;
      }
    }

    return newStr;
  };
}

module.exports = applyCustomJoin;
