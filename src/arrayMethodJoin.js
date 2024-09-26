'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedStr = '';
    const maxIndex = this.length - 1;

    for (let i = 0; i <= maxIndex; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        joinedStr += this[i];
      }

      if (i !== maxIndex) {
        joinedStr += separator;
      }
    }

    return joinedStr;
  };
}

module.exports = applyCustomJoin;
