'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let resultStr = '';

    for (let key = 0; key < this.length; key++) {
      if (this[key] !== null && this[key] !== undefined) {
        resultStr += this[key];
      }

      if (key < this.length - 1) {
        resultStr += separator;
      }
    }

    return resultStr;
  };
}

module.exports = applyCustomJoin;
