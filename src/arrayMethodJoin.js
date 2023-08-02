'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const separatorString = `${separator}`;

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        result += this[i] + separatorString;
      } else {
        result += separatorString;
      }
    }

    return result.slice(0, result.length - separatorString.length);
  };
}

module.exports = applyCustomJoin;
