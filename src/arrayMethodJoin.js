'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let outputStr = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        outputStr += this[i];
      }

      if (i !== this.length - 1) {
        outputStr += separator;
      }
    }

    return outputStr;
  };
}

module.exports = applyCustomJoin;
