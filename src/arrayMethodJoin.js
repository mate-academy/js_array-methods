'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const arrLength = this.length;
    let outputStr = '';

    for (let i = 0; i < arrLength; i++) {
      const item = this[i];

      if (item !== undefined && item !== null) {
        outputStr += item;
      }

      if (i !== arrLength - 1) {
        outputStr += separator;
      }
    }

    return outputStr;
  };
}

module.exports = applyCustomJoin;
