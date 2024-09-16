'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newStr = '';

    if (this.length === 0) {
      return newStr;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        newStr += this[i];
      }

      if (i !== this.length - 1) {
        newStr += separator;
      }
    }

    return newStr;
  };
}

module.exports = applyCustomJoin;
