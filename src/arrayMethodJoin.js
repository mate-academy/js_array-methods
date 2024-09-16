'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let spaces = separator;
    let resultStr = '';

    if (typeof separator !== 'string') {
      spaces = `${separator}`;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        resultStr += `${this[i]}`;
      }

      if (i === this.length - 1) {
        continue;
      }

      resultStr += `${spaces}`;
    }

    return resultStr;
  };
}

module.exports = applyCustomJoin;
