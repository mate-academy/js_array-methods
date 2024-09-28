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

      if (i !== this.length - 1) {
        resultStr += `${this[i]}${separator}`;
      } else {
        resultStr += this[i];
      }
    }

    return resultStr;
  };
}

module.exports = applyCustomJoin;
