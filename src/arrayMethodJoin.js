'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let joinedStr = '';

    for (let i = 0; i <= this.length - 1; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        joinedStr += this[i];
      }

      if (i !== this.length - 1) {
        joinedStr += separator;
      }
    }

    return joinedStr;
  };
}

module.exports = applyCustomJoin;
