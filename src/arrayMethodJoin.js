'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newStr = '';

    for (let index = 0; index < this.length; index++) {
      if (this[index] !== null && this[index] !== undefined) {
        newStr += this[index];
      }

      if (index !== this.length - 1) {
        newStr += `${separator}`;
      }
    }

    return newStr;
  };
}

module.exports = applyCustomJoin;
