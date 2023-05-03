'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let result = '';
    let separatorCopy = separator;

    if (separatorCopy === undefined) {
      separatorCopy = ',';
    }

    for (let i = 0; i < this.length; i++) {
      if (i > 0) {
        result += separatorCopy;
      }

      if (this[i] !== null && this[i] !== undefined) {
        result += this[i];
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
