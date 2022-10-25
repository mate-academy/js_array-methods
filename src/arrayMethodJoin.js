'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultStr = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }

      if (i === 0) {
        resultStr += this[i];
      } else {
        resultStr += `${separator}${this[i]}`;
      }
    }

    return resultStr;
  };
}

module.exports = applyCustomJoin;
