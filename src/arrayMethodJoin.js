'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newStr = '';

    for (let i = 0; i < this.length; i++) {
      if (i) {
        newStr += separator;
      }

      if (this[i] !== null && this[i] !== undefined) {
        newStr += this[i];
      }
    }

    return newStr;
  };
}

module.exports = applyCustomJoin;
