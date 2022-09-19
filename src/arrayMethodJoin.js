'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let outputStr = '';

    for (let i = 0; i < this.length; i++) {
      const item = this[i];

      if (item !== undefined && item !== null) {
        outputStr += item;
      }

      if (i !== this.length - 1) {
        outputStr += separator;
      }
    }

    return outputStr;
  };
}

module.exports = applyCustomJoin;
