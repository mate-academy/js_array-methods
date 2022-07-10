'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let resultStr = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        resultStr += this[i];
      }

      if (i !== this.length - 1) {
        resultStr += `${separator}`;
      }
    }

    return resultStr;
  };
}

module.exports = applyCustomJoin;
